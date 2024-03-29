import React, {useContext, useState} from 'react';
import dayjs from 'dayjs';

import {DATE_KEY_FORMAT} from './App';
import {Task} from './HabiticaTypes';
import {AppContext} from './UserHistory';
import {TaskIcon} from './TaskIcon';
import HistoryTableHeader from './HistoryTableHeader';
import logger from './logger';
import {Habit} from './HabitHistory';

var md = require('habitica-markdown');

export interface DailyHistoryProps {
  toggleNumDaysToShow: () => void;
  data: Task[];
}

export default function DailyHistory(props: DailyHistoryProps) {
  const [showNoHistory, setShowNoHistory] = useState(true);

  return (
    <section className="dailys">
      <table>
        <HistoryTableHeader
          title="Habits"
          setShowNoHistory={setShowNoHistory}
          showNoHistory={showNoHistory}
        />
        <tbody onClick={props.toggleNumDaysToShow}>
          {props.data.map(daily =>
            daily.type === 'habit' ? (
              <Habit
                key={daily.id}
                showNoHistory={showNoHistory}
                habit={daily}
              />
            ) : (
              <Daily
                key={daily.id}
                showNoHistory={showNoHistory}
                daily={daily}
              />
            ),
          )}
        </tbody>
      </table>
      <div
        className="link show-no-history"
        onClick={() => setShowNoHistory(!showNoHistory)}></div>
    </section>
  );
}

export function Daily(props: {daily: Task; showNoHistory: boolean}) {
  const context = useContext(AppContext);
  const historyMap = new Map<string, number>();

  const {text, history, streak} = props.daily;

  logger.debug(text);
  for (let i = 1; i < history.length; i++) {
    const delta = history[i].value - history[i - 1].value;
    let taskUpdateTime = dayjs(history[i].date);
    logger.debug(
      taskUpdateTime.format('YYYY-MM-DD HH:mm:ss') + ': ' + history[i].value,
    );
    // Only consider times when the task value changes (or the first value).
    if (delta !== 0) {
      // This task update was done via cron so the task was actually done the
      // day before.
      if (
        context.cronIntervals.search(
          taskUpdateTime.unix(),
          taskUpdateTime.unix(),
        ).length > 0
      ) {
        // Daily could have been completed twice in the cron time so if a
        // completion already exists for yesterday then this completion must be
        // for today.
        const oneDayAgo = taskUpdateTime.subtract(1, 'day');
        if (!historyMap.has(oneDayAgo.format(DATE_KEY_FORMAT))) {
          taskUpdateTime = oneDayAgo;
        } else {
          if (historyMap.has(taskUpdateTime.format(DATE_KEY_FORMAT))) {
            logger.warn(
              `Too many completions for ${text} on ${taskUpdateTime}`,
            );
          }
        }
      }
      const taskDate = taskUpdateTime.format(DATE_KEY_FORMAT);
      historyMap.set(taskDate, delta);
    }
  }
  console.groupEnd();

  const dailyDeltas = context.dates
    .map(day => day.format(DATE_KEY_FORMAT))
    .map(day => ({
      day,
      delta: historyMap.get(day),
    }));

  if (
    dailyDeltas.filter(({delta}) => delta !== undefined).length === 0 &&
    !props.showNoHistory
  ) {
    // Don't render the component if showNoHistory is off.
    return null;
  }

  return (
    <tr>
      <td className="task-name-row">
        {/* <TaskIcon task={props.daily} /> */}
        <span
          className="task-name"
          dangerouslySetInnerHTML={{__html: md.render(text)}}
        />
      </td>
      {dailyDeltas.map(({day, delta}) => (
        <DailyStatus key={day} day={day} delta={delta!} streak={streak} />
      ))}
    </tr>
  );
}

function DailyStatus(props: {
  day: string;
  delta: number | undefined;
  streak: number;
}) {
  let classNames = ['daily-cell'];
  let symbolNames = ['symbol'];
  let symbol;

  if (props.day !== dayjs(new Date()).format(DATE_KEY_FORMAT)) {
    if (!props.delta || props.delta <= 0) {
      classNames.push('fail');
      symbol = '✖';
    } else {
      classNames.push('success');
      symbol = '✓';
    }
  } else {
    if (!props.delta || props.delta === 0) {
      classNames.push('pass');
      symbolNames.push('streak');
      symbol = props.streak == 0 ? '0🥶' : props.streak + '🔥';
    } else if (props.delta > 0) {
      classNames.push('success');
      symbol = '✓';
    } else {
      classNames.push('fail');
      symbol = '✖';
    }
  }

  return (
    <td className={classNames.join(' ')}>
      {symbol && (
        <div className="center-wrapper">
          <span className={symbolNames.join(' ')}>{symbol}</span>
        </div>
      )}
    </td>
  );
}
