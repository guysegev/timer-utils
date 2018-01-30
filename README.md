# timer-utils

JavaScript utility library for timeouts and intervals.

Allows stopping all timeouts and intervals that currently run in the system.

Allows you to pause and resume all setTimeout and setInterval callbacks.

Can help in stabilizing the application and stop data or DOM refreshes, for example, for automation testing purposes.

## Installing

```
npm install --save timer-utils
```

## Usage example

### Clear all intervals

```javascript
import { setInterval, clearInterval, clearAllIntervals } from '../dist/timer-utils.umd';

setInterval(msg => { // setInterval of timer-utils
	console.log(`${msg}`);
}, 1000, 'Interval #1 executed callback');

const intervalId2 = setInterval(msg => { // setInterval of timer-utils
	console.log(`${msg}`);
}, 1000, 'Interval #2 executed callback');

setInterval(msg => { // setInterval of timer-utils
	console.log(`${msg}`);
}, 1000, 'Interval #3 executed callback');

setInterval(msg => { // setInterval of timer-utils
	console.log(`${msg}`);
}, 1000, '');

setTimeout(() => { // native setTimeout (not in the import statement)
	console.log('~~~ Stoping interval #2 ~~~');
	clearInterval(intervalId2);
}, 3500);

setTimeout(() => { // native setTimeout (not in the import statement)
	console.log('~~~ Stoping all intervals ~~~');
	clearAllIntervals();
}, 9500);
```

![](https://github.com/guysegev/timer-utils/blob/master/example/clear-all-intervals.jpg?raw=true)

### Pause/Resume interval

```javascript
import { setInterval, pauseIntervalCallbacks, resumeIntervalCallbacks } from '../dist/timer-utils.umd';

setInterval(msg => { // setInterval of timer-utils
	const d = (new Date()).toTimeString();
	console.log(`${msg} on ${d}`);
}, 1000, 'Executed');

setTimeout(() => { // native setTimeout (not in the import statement)
	console.log('~~~ Stoping callbacks execution for 7 seconds ~~~');
	pauseIntervalCallbacks();

	setTimeout(() => { // native setTimeout (not in the import statement)
		console.log('~~~ Resuming callbacks execution ~~~');
		resumeIntervalCallbacks();
	}, 7000);
}, 4500);
```

![](https://github.com/guysegev/timer-utils/blob/master/example/pause-interval-callbacks.jpg?raw=true)


## Library API
```javascript

// starts a native setTimeout, returns the ID value of the timer (for clearTimeout usage)
setTimeout(callback, milliseconds, ...args)

// stops the active timeout by the given ID
clearTimeout(timerId)

// stops all active timeouts
clearAllTimeouts()

// pauses all setTimeout callbacks execution
pauseTimeoutCallbacks()

// resumes all setTimeout callbacks execution
resumeTimeoutCallbacks()

// checks whether timeout callbacks are paused
isTimeoutCallbacksPaused()

// starts a native setInterval, returns the ID value of the timer (for clearTimeout usage)
setInterval(callback, milliseconds, ...args)

// stops the active interval by the given ID
clearInterval(timerId)

// stops all active intervals
clearAllIntervals()

// pauses all setInterval callbacks execution
pauseIntervalCallbacks()

// resumes all setInterval callbacks execution
resumeIntervalCallbacks()

// checks whether interval callbacks are paused
isIntervalCallbacksPaused()

```

## License

This project is licensed under the MIT License
