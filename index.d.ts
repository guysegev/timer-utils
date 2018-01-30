// Type definitions for timer-utils
// Project: timer-utils
// Definitions by: Guy Segev <https://github.com/guysegev>

export function setTimeout(callback: (...args: any[]) => void, ms: number, ...args: any[]): number;

export function clearTimeout(timerId: number): void;

export function clearAllTimeouts(): void;

export function pauseTimeoutCallbacks(): void;

export function resumeTimeoutCallbacks(): void;

export function isTimeoutCallbacksPaused(): boolean;

export function setInterval(callback: (...args: any[]) => void, ms: number, ...args: any[]): number;

export function clearInterval(timerId: number): void;

export function clearAllIntervals(): void;

export function pauseIntervalCallbacks(): void;

export function resumeIntervalCallbacks(): void;

export function isIntervalCallbacksPaused(): boolean;
