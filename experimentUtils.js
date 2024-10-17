const dayjs = require("dayjs");
const utc = require("dayjs/plugin/utc");
const timezone = require("dayjs/plugin/timezone");

dayjs.extend(utc);
dayjs.extend(timezone);

const timezone1 = "Africa/Algiers";
const timezone2 = "Africa/Addis_Ababa";
const convertUTCToTimezone = (time, timeZone, returnAsDate = false) => {
  const format = convertedTime1.format();
    const toDate = new Date(time).toLocaleString("en-US", {timeZone: timeZone});

    const convertedTime = dayjs.utc(time).tz(timeZone);
    // Get the offset in minutes (positive if ahead of UTC, negative if behind)
    // console.log('toDate', convertedTime);

  const convertWithOffset = dayjs(time).utcOffset(330);


//   console.log("convertedTime", convertedTime1);
//   console.log("convertWithOffset", convertWithOffset);
//   console.log("format", format);
  // if (returnAsDate) {
  //     // Create a Date object using the Day.js time components for the specific timezone
  //     return new Date(
  //         convertedTime.year(),
  //         convertedTime.month(),      // month is 0-indexed in JavaScript Date (0 = January)
  //         convertedTime.date(),       // day of the month
  //         convertedTime.hour(),       // hour in 24-hour format
  //         convertedTime.minute(),     // minute
  //         convertedTime.second(),     // second
  //         convertedTime.millisecond() // millisecond
  //     );
  // }

  // Return the formatted time as string
};
const time = "Thu Oct 17 2024 01:00:00 GMT+0530 (India Standard Time)";


const convertedTime1 = () =>  dayjs(time).utc();
console.log('test', convertedTime1());

// const time1 = "2024-09-27T12:00:00.655Z";



// ------------------offset-------------------
var offset = (new Date()).getTimezoneOffset();
// console.log(offset); // -330


 const convertUTCToTimezoneDateSelect = (time, timeZone) => {
 const offset = new Date().getTimezoneOffset() * 60 * 1000

 const offsetTo = dayjs.utc(time).tz(timeZone).utcOffset() * 60 * 1000

 const _utcObject = new Date(new Date(time).getTime() - offset - offsetTo)

//  console.log(_utcObject.toISOString() )
}


convertUTCToTimezoneDateSelect(time, timezone2)

// Test outputs
// convertUTCToTimezone(time1, timezone1);

//const timezone1 = 'Asia/Calcutta';

// console.log(convertUTCToTimezone(time, timezone2, true));

// console.log(convertUTCToTimezone(time, timezone2));  // Formatted string for Africa/Addis_Ababa
// console.log(convertUTCToTimezone(time, timezone2, true));  // Date object with Africa/Addis_Ababa time
// console.log(convertUTCToTimezone(time, timezone3));  // F
