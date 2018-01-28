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