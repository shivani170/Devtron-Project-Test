const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone');

dayjs.extend(utc);
dayjs.extend(timezone);

// Function to convert UTC time to a specific timezone
const convertUTCToTimezone = (utcTime, targetTimezone) => {
  return dayjs.utc(utcTime).tz(targetTimezone).format()
}

// Example usage:
const utcTime = '2024-09-27T12:00:00.655Z'; // UTC time
// const targetTimezone = 'Africa/Addis_Ababa'; // Desired timezone
const targetTimezone = 'Africa/Algiers'; // Desired timezone


const convertedTime = convertUTCToTimezone(utcTime, targetTimezone);
console.log(convertedTime);



// const dayjs = require('dayjs');
// const utc = require('dayjs/plugin/utc');
// const timezone = require('dayjs/plugin/timezone');

// dayjs.extend(utc);
// dayjs.extend(timezone);

// // Function to convert UTC such that hh:mm remains the same in the target timezone
// const convertToSameTimeInTargetTimezone = (time, sourceTimezone, targetTimezone) => {
//   // Parse the time in the source timezone
//   const timeInSourceTimezone = dayjs.tz(time, sourceTimezone);
//   console.log('timeInSourceTimezone', timeInSourceTimezone)
//   // Get the same local time in the target timezone
//   const sameTimeInTargetTimezone = dayjs.tz(
//     timeInSourceTimezone.format('YYYY-MM-DD HH:mm:ss'),
//     targetTimezone
//   );
  
//   console.log(sameTimeInTargetTimezone)
//   // Convert it back to UTC
//   return sameTimeInTargetTimezone.utc().format('YYYY-MM-DDTHH:mm:ss[Z]');
// }

// // Example usage:
// const utcTime = '2024-10-10T13:45:00Z'; // Time in UTC relative to source timezone
// const sourceTimezone = 'America/New_York'; // Source timezone (-4)
// const targetTimezone = 'Europe/London'; // Target timezone (+1)

// const newUtcTime = convertToSameTimeInTargetTimezone(utcTime, sourceTimezone, targetTimezone);
// console.log(newUtcTime, 'newUtcTime'); 

// ----------------------------------------------------------------------------------------------------------------------------

// // Import dayjs and the plugins for timezone and UTC
// const dayjs = require('dayjs');
// const utc = require('dayjs/plugin/utc');
// const timezone = require('dayjs/plugin/timezone');

// dayjs.extend(utc);
// dayjs.extend(timezone);

// function getEquivalentUTCForTargetTimezone(utcTime, originalTimezone, targetTimezone) {
//     // Parse the original UTC time and convert it to the original timezone
//     const originalTimeInOriginalZone = dayjs(utcTime).tz(originalTimezone);

//     // Extract the date, hour, minute, and second from the original timezone
//     const localYear = originalTimeInOriginalZone.year();
//     const localMonth = originalTimeInOriginalZone.month();  // month is 0-indexed
//     const localDate = originalTimeInOriginalZone.date();
//     const localHour = originalTimeInOriginalZone.hour();
//     const localMinute = originalTimeInOriginalZone.minute();
//     const localSecond = originalTimeInOriginalZone.second();

//     // Set the same local time and date in the target timezone
//     const targetTimeInTargetZone = dayjs()
//         .tz(targetTimezone)
//         .set('year', localYear)
//         .set('month', localMonth)
//         .set('date', localDate)
//         .set('hour', localHour)
//         .set('minute', localMinute)
//         .set('second', localSecond);

//     // Convert the target local time back to UTC
//     const equivalentUTC = targetTimeInTargetZone.utc().format();

//     return equivalentUTC;
// }

// // Example usage
// const utcTime = '2024-10-10T12:00:00Z';  // Original UTC time
// const originalTimezone = 'America/New_York';  // Original timezone (local time is 08:00:00)
// const targetTimezone = 'Europe/London';  // Target timezone

// console.log(getEquivalentUTCForTargetTimezone(utcTime, originalTimezone, targetTimezone));



// Import dayjs and the plugins for timezone and UTC
// const dayjs = require('dayjs');
// const utc = require('dayjs/plugin/utc');
// const timezone = require('dayjs/plugin/timezone');

// dayjs.extend(utc);
// dayjs.extend(timezone);

// function getEquivalentUTCForTargetTimezone(utcTime, originalTimezone, targetTimezone) {
//     // Parse the UTC time in the context of the original timezone
//     const originalTimeInOriginalZone = dayjs.tz(utcTime, originalTimezone);

//     // Keep the local time and convert it to the target timezone
//     const targetTimeInTargetZone = dayjs.tz(
//         originalTimeInOriginalZone.format('YYYY-MM-DD HH:mm:ss'),
//         targetTimezone
//     );

//     // Convert the target local time back to UTC
//     return targetTimeInTargetZone.utc().format();
// }

// // Example usage
// const utcTime = '2024-10-10T12:00:00Z';  // Original UTC time
// const originalTimezone = 'America/New_York';  // Original timezone (local time is 08:00:00)
// const targetTimezone = 'Europe/London';  // Target timezone

// console.log(getEquivalentUTCForTargetTimezone(utcTime, originalTimezone, targetTimezone));



// ----------------------------------------------------------------------------------------------------------------------------

// const dayjs = require('dayjs');
// const utc = require('dayjs/plugin/utc');
// const timezone = require('dayjs/plugin/timezone');

// dayjs.extend(utc);
// dayjs.extend(timezone);

// const getEquivalentUTCForTargetTimezone = (utcTime, originalTimezone, targetTimezone) =>
//     dayjs.tz(dayjs.tz(utcTime, originalTimezone).format('YYYY-MM-DD HH:mm:ss'), targetTimezone).utc().format();

// // Example usage
// console.log(getEquivalentUTCForTargetTimezone('2024-10-10T12:00:00Z', 'America/New_York', 'Europe/London'));


