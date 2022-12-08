import moment from 'moment';

export const isValidDate = currentDate => {
  const today = moment().subtract(0, 'day');
  return currentDate.isBefore(today);
};
