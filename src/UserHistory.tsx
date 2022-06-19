import React, { useState, useEffect, useContext, useRef } from "react";
import IntervalTree from "node-interval-tree";
import dayjs, { Dayjs } from "dayjs";
import Confetti from 'react-confetti';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import logger from "./logger";

import { Task, History } from "./HabiticaTypes";
import DailyHistory from "./DailyHistory";

export const DATE_KEY_FORMAT = "YYYYMMDD";

const HABITICA_API_URL = "https://habitica.com/api/v3";
const CLIENT_KEY = "0d9428fd-d6fa-45f3-a4db-f130e3ef10ea-HabiticaTracker";
const USER_PATH = "/user";
const TASKS_PATH = "/tasks/user";
const TODOS_COMPLETED_PATH = "/tasks/user?type=completedTodos";
const DEFAULT_NUM_DAYS_TO_SHOW = 7;

/**
 * Tasks completed during Cron time are tasks which were completed the previous
 * day. These are different from tasks which were completed at other times
 * which are assigned to the date on which they were completed. The Cron time
 * is used to guess at which tasks fall into each category. Because the task
 * completion time is not exactly equal to the cron time, this constant is used
 * to create a Cron time buffer to designate all tasks which were completed
 * this amount of time before the Cron time as Cron tasks.
 */
const CRON_BUFFER_DURATION_SECONDS = 300;

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function setRandConfettiNum() {
  return getRandomInt(2000, 5000)
}

const TWENTY_FIVE_MIN = 25 * 60;

function fancyTimeFormat(duration : number) {   
  // Hours, minutes and seconds
  var hrs = ~~(duration / 3600);
  var mins = ~~((duration % 3600) / 60);
  var secs = ~~duration % 60;

  // Output like "1:01" or "4:03:59" or "123:03:59"
  var ret = "";

  if (hrs > 0) {
      ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
  }

  ret += "" + mins + ":" + (secs < 10 ? "0" : "");
  ret += "" + secs;
  return ret;
}

export const AppContext = React.createContext({
  showTaskIcons: false,
  dates: Array<Dayjs>(),
  cronIntervals: new IntervalTree(),
});

interface UserHistoryProps {
  userId: string;
  userApiKey: string;
  setError: (errorMessage: Error) => void;
}

export default function UserHistory(props: UserHistoryProps) {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  const [showConfetti, setShowConfetti] = useState<boolean>(false);
  const [numberOfPieces, setNumberOfPieces] = useState<number>(setRandConfettiNum());

  // App states
  const [isLoadingUserData, setLoadingUserData] = useState(true);
  const [isLoadingTaskData, setLoadingTaskData] = useState(true);
  const [isLoadingTodoData, setLoadingTodoData] = useState(true);

  // User options
  const [numDaysToShow, setNumDaysToShow] = useState<number>(
    DEFAULT_NUM_DAYS_TO_SHOW
  );
  const [showTaskIcons, setShowTaskIcons] = useState<boolean>(false);

  // User data
  const [cronTimes, setCronTimes] = useState<Array<[number, number]>>([]);
  const [habits, setHabits] = useState<Task[]>([]);
  const [dailys, setDailys] = useState<Task[]>([]);
  const [todos, setTodos] = useState<Task[]>([]);

  // Pomodoro
  const [inPomodoroSession, setInPomodoroSession] = useState(false);
  const [pomodoroTimer, setPomodoroTimer] = useState(TWENTY_FIVE_MIN);
  const pomodoroTimerRef = useRef(pomodoroTimer);
  pomodoroTimerRef.current = pomodoroTimer;

  const [showDialog, setShowDialog] = useState(false);
  const handleCloseDialog = () => setShowDialog(false);
  const handleShowDialog = () => setShowDialog(true);

  const { userId, userApiKey } = props;

  const onConfettiComplete = () => {
    setNumberOfPieces(setRandConfettiNum())
    setShowConfetti(false)
  }

  const fetchWithApiKey = (url: string) => {
    return fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-api-user": userId,
        "x-api-key": userApiKey,
        "x-client": CLIENT_KEY,
      },
    });
  };

  const handleApiError = (res: any) => {
    if (!res.success) {
      throw new Error(res.message);
    }
    return res;
  };

  const setError = props.setError;

  const readData = () => fetchWithApiKey(HABITICA_API_URL + TASKS_PATH)
  .then((res) => res.json())
  .then(handleApiError)
  .then(
    (result) => {
      setHabits(result.data.filter((task: Task) => task.type === "habit"));
      setDailys(result.data.filter((task: Task) => task.type === "daily"));
      setLoadingTaskData(false);
      console.log(HABITICA_API_URL + TASKS_PATH, JSON.stringify(result));
    },
    (error) => {
      setError(error);
    }
  );

  const scoreTask = (taskId: string) => {
    return fetch(
      HABITICA_API_URL + '/tasks/' + taskId + '/score/up',
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-user": userId,
          "x-api-key": userApiKey,
          "x-client": CLIENT_KEY,
        },
      }
    ).then((res) => res.json())
    .then(handleApiError)
    .then(
      (result) => {
        setShowConfetti(true)
        console.log(HABITICA_API_URL + '/tasks/' + taskId + '/score/up', JSON.stringify(result));
      },
      (error) => {
        setError(error);
      })
    .then(readData);
  }

  const dailyGoal = () => scoreTask('b85dc3ec-7836-4827-aa68-e7e605c1489e')

  const scorePomodoro = () => scoreTask('ec59d7c1-e692-4b17-b2e0-6b6a76aedcc3')

  const reflect = () => scoreTask('13ab931b-b04a-47f0-9555-ad3bc4428dd6')

  useEffect(() => {
    if (!("Notification" in window)) {
      console.log("This browser does not support desktop notification");
    } else {
      Notification.requestPermission();
    }
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Fetch user data to get cron times.
  useEffect(() => {
    fetchWithApiKey(HABITICA_API_URL + USER_PATH)
      .then((res) => res.json())
      .then(handleApiError)
      .then(
        (result) => {
          setCronTimes(
            result.data.history.exp.map((history: History) => {
              const cronTime = dayjs(history.date);
              return [
                cronTime.unix() - CRON_BUFFER_DURATION_SECONDS,
                cronTime.unix() + CRON_BUFFER_DURATION_SECONDS,
              ];
            })
          );
          setLoadingUserData(false);
        },
        (error) => {
          setError(error);
        }
      );
  }, []); // DO NOT REMOVE the empty dependency array

  // Fetch habit and daily data.
  useEffect(() => {
    readData()
  }, []); // DO NOT REMOVE the empty dependency array

  // Fetch completed todos.
  useEffect(() => {
    fetchWithApiKey(HABITICA_API_URL + TODOS_COMPLETED_PATH)
      .then((res) => res.json())
      .then(handleApiError)
      .then(
        (result) => {
          setTodos(result.data.filter((task: Task) => task.type === "todo"));
          setLoadingTodoData(false);
        },
        (error) => {
          setError(error);
        }
      );
  }, []); // DO NOT REMOVE the empty dependency array

  const startPomodoro = () => {
    setInPomodoroSession(true)
    pomodoroTimeout()
    handleShowDialog()
  }

  const runPomodoro = () => {
    let newTimer = pomodoroTimerRef.current - 1
    setPomodoroTimer(newTimer)

    if (newTimer === 0) {
      finishPomodoro()
    } else {
      pomodoroTimeout()
    }
  }

  const pomodoroTimeout = () => setTimeout(runPomodoro, 1000)

  const finishPomodoro = () => {
    setInPomodoroSession(false)
    setPomodoroTimer(TWENTY_FIVE_MIN)
    scorePomodoro()
    new Notification('pomodoro is finished yo 🎉', {
      icon: 'https://vwskwong.github.io/assets/Logo/apple-touch-icon.png',
      image: 'https://c.tenor.com/I4d1QyAghmUAAAAM/hooray-letsgo.gif',
      requireInteraction: true,
    })
  }

  if (isLoadingUserData || isLoadingTaskData || isLoadingTodoData) {
    return (
      <div className="App">
        <p>Loading...</p>
      </div>
    );
  } else {
    const cronIntervals = new IntervalTree();
    cronTimes.forEach((range) => {
      logger.debug(`cron: ${dayjs.unix(range[0])} - ${dayjs.unix(range[1])}`);
      cronIntervals.insert(range[0], range[1], true);
    });

    const appContext = {
      showTaskIcons: showTaskIcons,
      dates: getDateArray(numDaysToShow),
      cronIntervals,
    };

    return (
      <div className="App">
        <AppContext.Provider value={appContext}>
          {/* <AppControls
            numDaysToShow={numDaysToShow}
            setNumDaysToShow={setNumDaysToShow}
            toggleTaskIcons={() => setShowTaskIcons(!showTaskIcons)}
          /> */}
          {/* <div className="identity">
            <span>Ambitious ♦ Mindful ♦ Disciplined</span>
          </div> */}
          <DailyHistory data={[...dailys.slice(0, -1), ...habits, ...dailys.slice(-1)]} />
          {/* <HabitHistory data={habits} /> */}
          {/* <TodoHistory data={todos} /> */}
          <div className="buttons-container">
            <div className="button-container">
              <Button variant="outline-success" onClick={dailyGoal}>✓ Daily Goal</Button>
            </div>
            <div className="button-container">
              <Button variant="outline-success" onClick={inPomodoroSession ? undefined : startPomodoro}>
                {inPomodoroSession ? fancyTimeFormat(pomodoroTimer) : '✓ Pomodoro'}
              </Button>
            </div>
            {/* <div className="button-container">
              <Button variant="outline-success" onClick={reflect}>✓ Reflect</Button>
            </div> */}
          </div>
          <Confetti
            width={windowDimensions.width}
            height={windowDimensions.height}
            run={showConfetti}
            onConfettiComplete={onConfettiComplete}
            numberOfPieces={numberOfPieces}
            recycle={false}
            tweenDuration={50000}
          />
          <Modal show={showDialog} onHide={handleCloseDialog} dialogClassName="dialog">
            <Modal.Header closeButton>
              <Modal.Title>lets get this bread 🍞</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p style={{margin: 0}}>
                Draw my line on mediocrity.<br /><br />
                Affirm: Who do I want to be?<br /><br />
                Visualize: negative + positive<br /><br />
                What do I want to accomplish right now?<br /><br />
                Breakdown the task.<br/><br/>
                Point n Call.
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseDialog}>
                🚨 go brrrr
              </Button>
            </Modal.Footer>
          </Modal>
        </AppContext.Provider>
      </div>
    );
  }
}

function AppControls(props: {
  numDaysToShow: number;
  setNumDaysToShow: (n: number) => void;
  toggleTaskIcons: () => void;
}) {
  const context = useContext(AppContext);
  const openHabitica = () => {
    window.open("https://habitica.com/");
  };
  const showMore = () => props.setNumDaysToShow(props.numDaysToShow + 7);
  const showLess = () => props.setNumDaysToShow(props.numDaysToShow - 7);
  const monthString = getMonthString(context.dates);

  return (
    <div className="app-controls">
      <div className="date-header" onClick={openHabitica}>{monthString}</div>
      {/* <div className="date-header" onClick={openHabitica}>Habitica</div> */}
      {/* <div>
        <span role="button" className="link" onClick={showMore}>
          +1 week
        </span>
        {props.numDaysToShow > 7 ? (
          <span>
            <span> / </span>
            <span role="button" className="link" onClick={showLess}>
              -1 week
            </span>
          </span>
        ) : null}
      </div> */}
      {/* <div className="date-header">{monthString}</div> */}
      {/* <span
        role="button"
        className="link"
        onClick={props.toggleTaskIcons}
        title="Show/Hide task icons"
      >
        {context.showTaskIcons ? "-" : "+"} Task Icons
      </span> */}
    </div>
  );
}

function getMonthString(dates: Dayjs[]): string {
  const monthStart = dates[0];
  const monthEnd = dates[dates.length - 1];
  if (monthStart.month() === monthEnd.month()) {
    return monthEnd.format("MMMM YYYY");
  }
  let startFormat = monthStart.year() === monthEnd.year() ? "MMM" : "MMM YYYY";
  let endFormat = "MMM YYYY";
  return [monthStart.format(startFormat), monthEnd.format(endFormat)].join("–");
}

/** Get all the dates to show.  */
function getDateArray(numDays: number): Dayjs[] {
  return Array(numDays)
    .fill(0)
    .map((_, i) => i)
    .reverse()
    .map((i) => dayjs().subtract(i, "day").startOf("day"));
}
