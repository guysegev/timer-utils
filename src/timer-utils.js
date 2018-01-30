import { _ } from 'lodash';

const TimerType = {
	TIMEOUT: 'TIMEOUT',
	INTERVAL: 'INTERVAL'
};

let timers = {};
timers[TimerType.TIMEOUT] = {
	activeTimers: [],
	executeCallbacks: true,
	setTimerFunc: setTimeout,
	clearTimerFunc: clearTimeout
};
timers[TimerType.INTERVAL] = {
	activeTimers: [],
	executeCallbacks: true,
	setTimerFunc: setInterval,
	clearTimerFunc: clearInterval
};

/** Module's public functions **/

function setTimeoutInternal(callback, milliseconds, ...args) {
	return startTimer(TimerType.TIMEOUT, callback, milliseconds, ...args);
}

function clearTimeoutInternal(timerId) {
	clearTimer(TimerType.TIMEOUT, timerId);
}

function clearAllTimeouts() {
	clearAllTimers(TimerType.TIMEOUT);
}

function pauseTimeoutCallbacks() {
	timers[TimerType.TIMEOUT].executeCallbacks = false;
}

function resumeTimeoutCallbacks() {
	timers[TimerType.TIMEOUT].executeCallbacks = true;
}

function isTimeoutCallbacksPaused() {
	return !timers[TimerType.TIMEOUT].executeCallbacks;
}

function setIntervalInternal(callback, milliseconds, ...args) {
	return startTimer(TimerType.INTERVAL, callback, milliseconds, ...args);
}

function clearIntervalInternal(timerId) {
	clearTimer(TimerType.INTERVAL, timerId);
}

function clearAllIntervals() {
	clearAllTimers(TimerType.INTERVAL);
}

function pauseIntervalCallbacks() {
	timers[TimerType.INTERVAL].executeCallbacks = false;
}

function resumeIntervalCallbacks() {
	timers[TimerType.INTERVAL].executeCallbacks = true;
}

function isIntervalCallbacksPaused() {
	return !timers[TimerType.INTERVAL].executeCallbacks;
}

/** Module's private functions **/

function startTimer(timerType, callback, milliseconds, ...args) {
	const callbackWrapper = getCallbackWrapper(timerType, callback, ...args);
	const setTimerFunc = timers[timerType].setTimerFunc;
	const timerId = setTimerFunc(callbackWrapper, milliseconds);
	timers[timerType].activeTimers.push(timerId);
	return timerId;
}

function getCallbackWrapper(timerType, callback, ...args) {
	return () => {
		const executeCallback = timers[timerType].executeCallbacks;
		if (executeCallback) {
			callback(...args);
		}
	};
}

function clearTimer(timerType, timerId) {
	_.pull(timers[timerType].activeTimers, timerId);
	const clearTimerFunc = timers[timerType].clearTimerFunc;
	clearTimerFunc(timerId);
}

function clearAllTimers(timerType) {
	const clearTimerFunc = timers[timerType].clearTimerFunc;
	timers[timerType].activeTimers.forEach(timerId => clearTimerFunc(timerId));
	timers[timerType].activeTimers.length = 0;
}

export { setTimeoutInternal as setTimeout, clearTimeoutInternal as clearTimeout, clearAllTimeouts,
	pauseTimeoutCallbacks, resumeTimeoutCallbacks, isTimeoutCallbacksPaused,
	setIntervalInternal as setInterval, clearIntervalInternal as clearInterval, clearAllIntervals,
	pauseIntervalCallbacks, resumeIntervalCallbacks, isIntervalCallbacksPaused };