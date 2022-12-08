import React from 'react';
import { Formik } from 'formik';
import { TransactionSchema } from '../helpers/formikTransactionSchema';
import { useState } from 'react';
import 'react-datetime/css/react-datetime.css';
import Datetime from 'react-datetime';
import moment from 'moment';
import { isValidDate } from '../helpers/checkValidDate';
import { Oval } from 'react-loader-spinner';
import {
  CheckboxWrapp,
  CheckboxInput,
  CheckboxTextExpense,
  CheckboxSlider,
  CheckboxPoint,
  CheckboxTextIncome,
  Title,
  SumAndDateWrapp,
  SumWrap,
  CalendarWrap,
  DateWrap,
  SumField,
  TextAreaWrap,
  Textarea,
  DatetimeInput,
  Error,
} from './addTransanctionForm.styled';
import { MySelect } from './addTransactionFormSelect/addTransactionFormSelect';
import { TransactionFormButton } from '../addTransactionModal/addTransactionModal.styled';
import { TransactionForm } from './addTransanctionForm.styled';
import { useCreateTransactionMutation } from 'redux/transactionsSlice';
import Notiflix from 'notiflix';
import sprite from '../../../images/svg/symbol-defs.svg';
import { FiPlus, FiMinus } from 'react-icons/fi';

Notiflix.Notify.init({
  width: 'auto',
  position: 'top-right',
  distance: '50px',
  borderRadius: '10px',
  clickToClose: true,
  useIcon: false,
  fontSize: '23px',
});

const currentDate = moment().format('DD.MM.YYYY');

const initialValues = {
  type: false,
  sum: '',
  date: new Date().toString(),
  comment: '',
  category: '',
};

const AddTransactionForm = ({ onCancel }) => {
  const [transactionType, setTransactionType] = useState(false);
  const [addTransaction, { isLoading }] = useCreateTransactionMutation();

  return (
    <div>
      <Title>Add Transaction</Title>
      <Formik
        initialValues={initialValues}
        validationSchema={TransactionSchema}
        onSubmit={async values => {
          const { category, sum, comment, date } = values;
          const newTransaction = {
            type: transactionType,
            category: category === '' ? 'Other' : category,
            sum: Number(sum),
            date: date,
            month: Number(moment(date).format('MM')),
            year: Number(moment(date).format('YYYY')),
            comment: comment === '' ? 'No comment' : comment,
          };
          await addTransaction(newTransaction)
            .then(res => {
              if (res.error) {
                onCancel();
                return res.error.data.message === 'You spend too much!'
                  ? Notiflix.Notify.failure('You spend too much!')
                  : Notiflix.Notify.failure('Something went wrong');
              }
              onCancel();
              Notiflix.Notify.success('New transaction added successfully');
            })
            .catch(error => {
              onCancel();
              Notiflix.Notify.failure('Something went wrong');
            });
        }}
      >
        {({
          handleSubmit,
          handleChange,
          setFieldValue,
          values,
          errors,
          touched,
          isValid,
          dirty,
        }) => (
          <TransactionForm autoComplete="off">
            <CheckboxWrapp>
              <CheckboxInput
                type="checkbox"
                id="type"
                name="type"
                tabIndex="-1"
                onChange={() => {
                  setTransactionType(!transactionType);
                }}
                checked={transactionType}
              />

              <CheckboxSlider>
                <CheckboxPoint isChecked={transactionType}>
                  {transactionType ? (
                    <FiPlus
                      style={{ color: 'white', width: '30px', height: '30px' }}
                    />
                  ) : (
                    <FiMinus
                      style={{ color: 'white', width: '30px', height: '30px' }}
                    />
                  )}
                </CheckboxPoint>
              </CheckboxSlider>
              {touched.type && errors.type && <Error>{errors.type}</Error>}
              <CheckboxTextIncome>Income</CheckboxTextIncome>
              <CheckboxTextExpense>Expense</CheckboxTextExpense>
            </CheckboxWrapp>

            {!transactionType && (
              <MySelect
                name="category"
                onChange={data => setFieldValue('category', data?.value)}
              />
            )}
            {touched.category && errors.category && (
              <Error>{errors.category}</Error>
            )}

            <SumAndDateWrapp>
              <SumWrap>
                <SumField
                  type="number"
                  id="sum"
                  name="sum"
                  placeholder="Amount 0.00"
                  step=".10"
                />
                {touched.sum && errors.sum && <Error>{errors.sum}</Error>}
              </SumWrap>
              <DateWrap>
                <Datetime
                  renderInput={props => <DatetimeInput {...props} />}
                  id="date"
                  closeOnSelect={true}
                  closeOnClickOutside={true}
                  name="date"
                  initialValue={currentDate}
                  isValidDate={isValidDate}
                  dateFormat="DD.MM.YYYY"
                  timeFormat={false}
                  onChange={e => setFieldValue('date', new Date(e).toString())}
                  inputProps={{
                    onKeyDown: e => {
                      e.preventDefault();
                    },
                  }}
                />
                <CalendarWrap>
                  <svg width="18px" height="20px">
                    <use href={`${sprite}#icon-calendar`} />
                  </svg>
                </CalendarWrap>
              </DateWrap>
            </SumAndDateWrapp>
            <TextAreaWrap>
              <Textarea
                id="comment"
                name="comment"
                placeholder="Comment"
                onChange={handleChange}
              />
              {touched.comment && errors.comment && <Error>{errors.comment}</Error>}
            </TextAreaWrap>
            
            <TransactionFormButton
              primary
              type="submit"
              disabled={isLoading ? true : false}
            >
              {isLoading ? (
                <Oval
                  width={30}
                  height={30}
                  color="white"
                  ariaLabel="oval-loading"
                  secondaryColor="#000000"
                />
              ) : (
                <span>ADD</span>
              )}
            </TransactionFormButton>
          </TransactionForm>
        )}
      </Formik>
      <TransactionFormButton type="button" onClick={onCancel}>
        CANCEL
      </TransactionFormButton>
    </div>
  );
};

export default AddTransactionForm;
