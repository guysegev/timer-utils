
const TimerType = {
	TIMEOUT: 'TIMEOUT',
	INTERVAL: 'INTERVAL'
};

let executeTimeoutCallbacks = true;
let executeintervalCallbacks = true;

function setTimeoutWrapper(callback, milliseconds, ...args) {
	const callbackWrapper = getCallbackWrapper(TimerType.TIMEOUT, callback, ...args);
	return setTimeout(callbackWrapper, milliseconds);
}

function setIntervalWrapper(callback, milliseconds, ...args) {
	const callbackWrapper = getCallbackWrapper(TimerType.INTERVAL, callback, ...args);
	return setInterval(callbackWrapper, milliseconds);
}

function getCallbackWrapper(timerType, callback, ...args) {
	return () => {
		const executeCallback = (timerType === TimerType.TIMEOUT) ? executeTimeoutCallbacks : executeintervalCallbacks;
		if (executeCallback) {
			callback(...args);
		}
	};
}

function pauseTimeoutCallbacks() {
	executeTimeoutCallbacks = false;
}

function resumeTimeoutCallbacks() {
	executeTimeoutCallbacks = true;
}

function isTimeoutCallbacksPaused() {
	return !executeTimeoutCallbacks;
}

function pauseIntervalCallbacks() {
	executeintervalCallbacks = false;
}

function resumeIntervalCallbacks() {
	executeintervalCallbacks = true;
}

function isIntervalCallbacksPaused() {
	return !executeintervalCallbacks;
}

export { setTimeoutWrapper as setTimeout, setIntervalWrapper as setInterval,
	pauseTimeoutCallbacks, resumeTimeoutCallbacks, isTimeoutCallbacksPaused,
	pauseIntervalCallbacks, resumeIntervalCallbacks, isIntervalCallbacksPaused };