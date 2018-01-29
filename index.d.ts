// Type definitions for timer-utils
// Project: timer-utils
// Definitions by: Guy Segev <https://github.com/guysegev>

export function setTimeout(callback: (...args: any[]) => void, ms: number, ...args: any[]): number;

export function setInterval(callback: (...args: any[]) => void, ms: number, ...args: any[]): number;

export function pauseTimeoutCallbacks(): void;

export function resumeTimeoutCallbacks(): void;

export function isTimeoutCallbacksPaused(): boolean;

export function pauseIntervalCallbacks(): void;

export function resumeIntervalCallbacks(): void;

export function isIntervalCallbacksPaused(): boolean;
