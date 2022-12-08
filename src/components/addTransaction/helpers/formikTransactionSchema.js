import * as Yup from 'yup';
let patternTwoDigisAfterComma = /^\d+(\.\d{0,2})?$/;
export const TransactionSchema = Yup.object().shape({
  type: Yup.boolean()
    .oneOf([true, false])
    .required('Please indicate the type of your transaction'),
  sum: Yup.number()
    .typeError('Sum should be a number')
    .positive()
    .min(1, 'Sum value should be more than 1')
    .max(
      1000000000,
      "Can't confirm so big sum -looks like we will have a problems with law"
    )
    .test('is-decimal', 'Decimal part - 2 digit', val => {
      if (val !== undefined) {
        return patternTwoDigisAfterComma.test(val);
      }
      return true;
    })
    .required('This field is requried'),
  comment: Yup.string()
    .typeError('Should be a string')
    .min(0)
    .max(30, 'Try to make your comment a bit shorter - 30 symbols maximum'),

  category: Yup.string().oneOf([
    'Main',
    'Food',
    'Auto',
    'Development',
    'Children',
    'House',
    'Education',
    'Other',
  ]),
});
