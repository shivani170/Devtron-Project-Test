const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone');

dayjs.extend(utc);
dayjs.extend(timezone);

const convertUTCToTimezone = (
    time,
    timeZone,
    returnAsDate
) => {
    const convertedTime = dayjs.utc(time).tz(timeZone);
    if (returnAsDate) {
        // Return the Date object relative to the timezone and not local time zone
        return convertedTime; 
    }
    return convertedTime.format()
}

const time = '2024-09-27T12:00:00.655Z'
const timezone1 = 'Asia/Calcutta'
const timezone2 = 'Africa/Addis_Ababa'
const timezone3 = 'Africa/Algiers'


console.log(convertUTCToTimezone(time, timezone1))
console.log(convertUTCToTimezone(time, timezone2))
console.log(convertUTCToTimezone(time, timezone2, true))
console.log(convertUTCToTimezone(time, timezone3))

