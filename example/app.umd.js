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
		global.app = mod.exports;
	}
})(this, function (_timerUtils) {
	'use strict';

	(0, _timerUtils.setInterval)(function (msg) {
		// setInterval of timer-utils
		var d = new Date().toTimeString();
		console.log(msg + ' on ' + d);
	}, 1000, 'Executed');

	setTimeout(function () {
		// native setTimeout (not in the import statement)
		console.log('~~~ Stoping callbacks execution for 7 seconds ~~~');
		(0, _timerUtils.pauseIntervalCallbacks)();

		setTimeout(function () {
			// native setTimeout (not in the import statement)
			console.log('~~~ Resuming callbacks execution ~~~');
			(0, _timerUtils.resumeIntervalCallbacks)();
		}, 7000);
	}, 4500);
});
