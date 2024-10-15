// const { utcToZonedTime, format } = require('date-fns-tz');

// // Create a date object in a specific timezone
// const dateInNY = utcToZonedTime('2024-09-27T12:00:00.655Z', 'Africa/Addis_Ababa');

// // Format the date for display
// const formattedDate = format(dateInNY, 'yyyy-MM-dd HH:mm:ssXXX', { timeZone: 'America/New_York' });

// console.log(formattedDate); // Outputs: "2024-10-13 08:00:00-04:00"


const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone');

dayjs.extend(utc);
dayjs.extend(timezone);

// Function to convert UTC time to a specific timezone
const convertUTCToTimezone = (utcTime, targetTimezone) => {
  return dayjs.utc(utcTime).tz(targetTimezone);
}

// Example usage:
const utcTime = '2024-09-27T12:00:00.655Z'; // UTC time
const targetTimezone = 'Africa/Addis_Ababa'; // Desired timezone

const convertedTime = convertUTCToTimezone(utcTime, targetTimezone);
console.log(convertedTime);

