# timer-utils

JavaScript utility library for timeouts and intervals.

Allows you to pause and resume all setTimeout and setInterval callbacks.

Can help stabalizing the application and stop data or DOM refreshes, for example, for automation testing purposes.

## Installing

```
npm install --save timer-utils
```

## Usage example

```javascript
import { setInterval, pauseIntervalCallbacks, resumeIntervalCallbacks } from '../dist/timer-utils';

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

![](https://github.com/guysegev/timer-utils/blob/master/example/example.jpg)


## Package API
```javascript


// starts a native setTimeout, returns the ID value of the timer (for clearTimeout usage)
setTimeout(callback, milliseconds, ...args)

// starts a native setInterval, returns the ID value of the timer (for clearTimeout usage)
setInterval(callback, milliseconds, ...args)

// pauses all setTimeout callbacks execution
pauseTimeoutCallbacks()

// resumes all setTimeout callbacks execution
resumeTimeoutCallbacks()

// checks whether timoute callbacks are paused
isTimeoutCallbacksPaused()

// pauses all setInterval callbacks execution
pauseIntervalCallbacks()

// resumes all setInterval callbacks execution
resumeIntervalCallbacks()

// checks whether interval callbacks are paused
isIntervalCallbacksPaused()

```

## License

This project is licensed under the MIT License
