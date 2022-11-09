const getTimeStamp = (hours: number | string, minutes: number | string, seconds: number | string) => {
    return `Elapsed time: ${hours}h:${minutes}m:${seconds}s`;
}

export const getElapsedDuration = (startMs: number, endMs: number) => {
    const seconds = (endMs - startMs) / 1000;
    let minutes = 0;
    let hours = 0;
    if (seconds < 60) {
        return getTimeStamp(hours, minutes, seconds.toFixed(0));
    }
    const secondsUnderAMinute = seconds % 60;
    minutes = (seconds - secondsUnderAMinute) / 60;
    if (minutes < 60) {
        return getTimeStamp(hours, minutes, secondsUnderAMinute.toFixed(0));
    }
    const minutesUnderAnHour = minutes % 60;
    hours = (minutes - minutesUnderAnHour) / 60;
    return getTimeStamp(hours, minutesUnderAnHour, secondsUnderAMinute.toFixed(0));
}