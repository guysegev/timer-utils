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