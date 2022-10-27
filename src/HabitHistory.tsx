import React, { useContext, useState } from "react";
import dayjs from "dayjs";

import { Task } from "./HabiticaTypes";
import { DATE_KEY_FORMAT } from "./App";
import { AppContext } from "./UserHistory";
import { TaskIcon } from "./TaskIcon";
import HistoryTableHeader from "./HistoryTableHeader";
import logger from "./logger";

var md = require("habitica-markdown");

export interface HabitHistoryProps {
  data: Task[];
}

export default function HabitHistory(props: HabitHistoryProps) {
  const [showNoHistory, setShowNoHistory] = useState(true);

  return (
    <section className="habits">
      <table>
        <HistoryTableHeader
          title="Habits"
          setShowNoHistory={setShowNoHistory}
          showNoHistory={showNoHistory}
        />
        <tbody>
          {props.data.map((habit) => (
            <Habit key={habit.id} showNoHistory={showNoHistory} habit={habit} />
          ))}
        </tbody>
      </table>
    </section>
  );
}

export function Habit(props: { habit: Task; showNoHistory: boolean }) {
  const context = useContext(AppContext);
  const historyMap = new Map<string, [number, number]>();
  const { text, history } = props.habit;

  logger.debug(text);
  for (let record of history) {
    let taskDate = dayjs(record.date).format(DATE_KEY_FORMAT);
    logger.debug(JSON.stringify(record));
    if (record.scoredUp !== undefined && record.scoredDown !== undefined) {
      historyMap.set(taskDate, [record.scoredUp, record.scoredDown]);
    }
  }

  const dailyScores = context.dates
    .map((day) => day.format(DATE_KEY_FORMAT))
    .map((day) => ({
      day,
      score: historyMap.get(day)
    }));

  if (
    dailyScores.filter(({score}) => score !== undefined).length === 0 &&
    !props.showNoHistory
  ) {
    // Don't render the component if showNoHistory is off.
    return null;
  }

  return (
    <tr>
      <td className="task-name-row">
        {/* <TaskIcon task={props.habit} /> */}
        <span
          className="task-name"
          dangerouslySetInnerHTML={{ __html: md.render(text) }}
        />
      </td>
      {dailyScores.map(({day, score}) => {
        if (score) {
          return <HabitScore key={day} up={score[0]} down={score[1]} />;
        } else if (day !== dayjs(new Date()).format(DATE_KEY_FORMAT)) {
          return (
            <td key={day} className="habit-cell">
              <div className="habit-score-container">
                <div className="fail center-wrapper">
                  <span>✖</span>
                </div>
              </div>
            </td>
          )
        } else {
          return <td key={day} className="habit-cell">&nbsp;</td>;
        }
      })}
    </tr>
  );
}

function HabitScore(props: { up: number; down: number }) {
  let colour = props.up >= 1 ? "success" : "fail";
  return (
    <td className="habit-cell">
      <div className="habit-score-container">
        {props.up > 0 ? (
          <div className={[colour, "center-wrapper"].join(' ')}>
            <span>+{props.up}</span>
          </div>
        ) : (
          <div className="fail center-wrapper">
            <span>{props.up}</span>
          </div>
        )}
        {/* {props.down > 0 && (
          <div className="fail center-wrapper">
            <span>-{props.down}</span>
          </div>
        )} */}
      </div>
    </td>
  );
}
