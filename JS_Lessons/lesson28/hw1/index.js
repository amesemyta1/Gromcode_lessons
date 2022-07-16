export const shmoment = value => {
  const resultData = new Date(value);
  const year = resultData.getFullYear();
  const month = resultData.getMonth();
  const Day = resultData.getDay();
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
          const changemonth = month + number;
          resultData.setMonth(changemonth);
          return this;
        }
        case 'days': {
          const changeYear = Day + number;
          resultData.setDay(changeYear);
          return this;
        }
        case 'hours': {
          const changemonth = Hours + number;
          resultData.setHours(changemonth);
          return this;
        }
        case 'minutes': {
          const changemonth = Minutes + number;
          resultData.setMinutes(changemonth);
          return this;
        }
        case 'seconds': {
          const changemonth = Seconds + number;
          resultData.setSeconds(changemonth);
          return this;
        }
        case 'milliseconds': {
          const changemonth = Milliseconds + number;
          resultData.setMilliseconds(changemonth);
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
          const changeYear = Day - number;
          resultData.setDay(changeYear);
          return this;
        }
        case 'hours': {
          const changemonth = Hours - number;
          resultData.setHours(changemonth);
          return this;
        }
        case 'minutes': {
          const changemonth = Minutes - number;
          resultData.setMinutes(changemonth);
          return this;
        }
        case 'seconds': {
          const changemonth = Seconds - number;
          resultData.setSeconds(changemonth);
          return this;
        }
        case 'milliseconds': {
          const changemonth = Milliseconds - number;
          resultData.setMilliseconds(changemonth);
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

const test = shmoment(new Date()).add('months', 3).add('years', 1).result();

console.log('Function test: ', test);
