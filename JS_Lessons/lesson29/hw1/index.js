export const shmoment = value => {
  const resultData = new Date(value);
  const year = resultData.getFullYear();
  const month = resultData.getMonth();
  const Day = resultData.getDate();
  const Hours = resultData.getHours();
  const Minutes = resultData.getMinutes();
  const Seconds = resultData.getSeconds();
  const Milliseconds = resultData.getMilliseconds();
  console.log(resultData);

  const changeDate = {
    add(type, number) {
      switch (type) {
        case 'years': {
          const changeYear = year + number;
          resultData.setFullYear(changeYear);
          return this;
        }
        case 'months': {
          const changeMonth = month + number;
          resultData.setMonth(changeMonth);
          return this;
        }
        case 'days': {
          const changeDays = Day + number;
          resultData.setDate(changeDays);
          return this;
        }
        case 'hours': {
          const changeHours = Hours + number;
          resultData.setHours(changeHours);
          return this;
        }
        case 'minutes': {
          const changeMinutes = Minutes + number;
          resultData.setMinutes(changeMinutes);
          return this;
        }
        case 'seconds': {
          const changeSeconds = Seconds + number;
          resultData.setSeconds(changeSeconds);
          return this;
        }
        case 'milliseconds': {
          const changeMilliseconds = Milliseconds + number;
          resultData.setMilliseconds(changeMilliseconds);
          return this;
        }
        default:
          return this;
      }
    },
    subtract(type, number) {
      switch (type) {
        case 'years': {
          const changeYear = year - number;
          resultData.setFullYear(changeYear);
          return this;
        }
        case 'months': {
          const changemonth = month - number;
          resultData.setMonth(changemonth);
          return this;
        }
        case 'days': {
          const changeDays = Day - number;
          resultData.setDate(changeDays);
          return this;
        }
        case 'hours': {
          const changeHours = Hours - number;
          resultData.setHours(changeHours);
          return this;
        }
        case 'minutes': {
          const changeMinutes = Minutes - number;
          resultData.setMinutes(changeMinutes);
          return this;
        }
        case 'seconds': {
          const changeSeconds = Seconds - number;
          resultData.setSeconds(changeSeconds);
          return this;
        }
        case 'milliseconds': {
          const changeMilliseconds = Milliseconds - number;
          resultData.setMilliseconds(changeMilliseconds);
          return this;
        }
        default:
          return this;
      }
    },
    result() {
      return resultData;
    },
  };

  return changeDate;
};

const test = shmoment(new Date()).add('days', 33).add('years', 1).result();

console.log('Function test: ', test);
