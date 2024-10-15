const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone');

dayjs.extend(utc);
dayjs.extend(timezone);

function getEquivalentUTCForTargetTimezone(utcTime, originalTimezone, targetTimezone) {
    // Parse the original UTC time and convert it to the original timezone
    const originalTimeInOriginalZone = dayjs(utcTime).tz(originalTimezone);

    // Extract the date, hour, minute, and second from the original timezone
    const localYear = originalTimeInOriginalZone.year();
    const localMonth = originalTimeInOriginalZone.month();  // month is 0-indexed
    const localDate = originalTimeInOriginalZone.date();
    const localHour = originalTimeInOriginalZone.hour();
    const localMinute = originalTimeInOriginalZone.minute();
    const localSecond = originalTimeInOriginalZone.second();

    // Set the same local time and date in the target timezone
    const targetTimeInTargetZone = dayjs()
        .tz(targetTimezone)
        .set('year', localYear)
        .set('month', localMonth)
        .set('date', localDate)
        .set('hour', localHour)
        .set('minute', localMinute)
        .set('second', localSecond);

    // Convert the target local time back to UTC
    const equivalentUTC = targetTimeInTargetZone.utc().format();

    return equivalentUTC;
}

// Example usage
const utcTime = '2024-10-10T12:00:00Z';  // Original UTC time
const originalTimezone = 'America/New_York';  // Original timezone
const targetTimezone = 'Europe/London';  // Target timezone

console.log(getEquivalentUTCForTargetTimezone(utcTime, originalTimezone, targetTimezone));