# timer-utils

JavaScript utility library for timeouts and intervals.

Allows you to pause and resume all setTimeout and setInterval callbacks.

Can help stabalizing the application and stop data or DOM refreshes, for example, for automation testing purposes.

## Installing

npm install --save timer-utils

## Usage

```javascript
import { setInterval, pauseIntervalCallbacks, resumeIntervalCallbacks } from '../dist/timer-utils';

setInterval(msg => { // setInterval of timer-utils
	const d = (new Date()).toTimeString();
	console.log(`${msg} on ${d}`);
}, 1000, 'Executed');

setTimeout(() => { // native setTimeout
	console.log('~~~ Stoping callbacks execution for 7 seconds ~~~');

	pauseIntervalCallbacks();

	setTimeout(() => { // native setTimeout
		console.log('~~~ Resuming callbacks execution ~~~');
		resumeIntervalCallbacks();
	}, 7000);
}, 4500);
```

## License

This project is licensed under the MIT License
