(function (global, factory) {
	if (typeof define === "function" && define.amd) {
		define(['../dist/timer-utils.umd'], factory);
	} else if (typeof exports !== "undefined") {
		factory(require('../dist/timer-utils.umd'));
	} else {
		var mod = {
			exports: {}
		};
		factory(global.timerUtils);
		global.clearAllIntervals = mod.exports;
	}
})(this, function (_timerUtils) {
	'use strict';

	(0, _timerUtils.setInterval)(function (msg) {
		// setInterval of timer-utils
		console.log('' + msg);
	}, 1000, 'Interval #1 executed callback');

	var intervalId2 = (0, _timerUtils.setInterval)(function (msg) {
		// setInterval of timer-utils
		console.log('' + msg);
	}, 1000, 'Interval #2 executed callback');

	(0, _timerUtils.setInterval)(function (msg) {
		// setInterval of timer-utils
		console.log('' + msg);
	}, 1000, 'Interval #3 executed callback');

	(0, _timerUtils.setInterval)(function (msg) {
		// setInterval of timer-utils
		console.log('' + msg);
	}, 1000, '');

	setTimeout(function () {
		// native setTimeout (not in the import statement)
		console.log('~~~ Stoping interval #2 ~~~');
		(0, _timerUtils.clearInterval)(intervalId2);
	}, 3500);

	setTimeout(function () {
		// native setTimeout (not in the import statement)
		console.log('~~~ Stoping all intervals ~~~');
		(0, _timerUtils.clearAllIntervals)();
	}, 9500);
});
