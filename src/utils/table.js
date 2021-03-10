import { formatDateV2 } from './dates';

/**
 * Reduce array, agroup by date ands sales:
 * @param {object} sales
 */
const orderArrayByDate = (sales) => {
  const orderArray = Object.values(
    sales.reduce((acc, value, arrayIdx) => {
      const row = {
        date: formatDateV2(value.sale_date, 'dd-mm'),
        sales: sales.filter(
          (item) =>
            formatDateV2(item.sale_date, 'dd-mm') ===
            formatDateV2(value.sale_date, 'dd-mm')
        ).length,
      };
      acc[arrayIdx] = row;
      return acc;
    }, {})
  );

  return orderArray;
};

/**
 * Only unique rows:
 * @param {array} array
 */
const arrayUnique = (array) => {
  const orderArray = array.filter(
    (obj, pos, arr) =>
      arr.map((mapObj) => mapObj.date).indexOf(obj.date) === pos
  );

  return orderArray;
};

/**
 * Returns every day between two dates
 * @param {string} start
 * @param {string} end
 */
const getAllDaysBetweenTwoDates = (start, end) => {
  const dates = [];

  let currDate = new Date(
    new Date(start).setDate(new Date(start).getDate() - 1)
  );
  const lastDate = new Date(new Date(end).setDate(new Date(end).getDate() - 1));

  while (currDate < lastDate) {
    dates.push(currDate);
    currDate = new Date(currDate.setDate(new Date(currDate).getDate() + 1));
  }
  return dates;
};

/**
 * Transform the array of days into a friendly format
 * @param {array} array
 */
const convertAllDaysArray = (array) => {
  const notSalesDays = [];
  // Insert all dates in array:
  array.map((item) => {
    const d = item.toISOString().slice(0, 10).split('-');
    notSalesDays.push({
      date: `${d[2]}.${d[1]}`,
      sales: 0,
    });
  });

  return notSalesDays;
};

/**
 * Compare the two arrays, and return a single one containing the differences
 * @param {array} arrayApi
 * @param {array} arrayAllDays
 */
export const compareArraysAndDeletingRepeat = (arrayApi, arrayAllDays) => {
  const array = arrayAllDays.map((itemAllDays) => {
    const itemFound = arrayApi.find(
      (itemApi) => itemApi.date === itemAllDays.date
    ); 
    if (itemFound) {
      return itemFound;
    }
    return itemAllDays;
  });

  return array;
};

/**
 * From object, returns dates grouped by number and sales
 * @param {object} data
 */
const orderSalesByDate = (data) => {
  let arrayApi = orderArrayByDate(data.sales);

  arrayApi = arrayUnique(arrayApi);

  let arrayAllDays = getAllDaysBetweenTwoDates(
    data.period.start_date,
    data.period.end_date
  );

  arrayAllDays = convertAllDaysArray(arrayAllDays);

  const arrayFormated = compareArraysAndDeletingRepeat(arrayApi, arrayAllDays);

  return arrayFormated;
};

export default orderSalesByDate;
export { orderSalesByDate };