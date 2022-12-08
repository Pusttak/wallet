import React from 'react';
import AddTransactionModal from '../addTransactionModal/addTransactionModal';
import { TransactionButton } from './addTransactionButton.styled';
import { FiPlus } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModalOpen } from '../../../redux/userSlice';

const AddTransactionButton = () => {
  const dispatch = useDispatch();
  const { isModalOpen } = useSelector(state => state.userInformation);

  const handleClick = () => {
    dispatch(toggleModalOpen(true));
  };
  return (
    <>
      {!isModalOpen && (
        <TransactionButton type="button" onClick={handleClick}>
          <FiPlus style={{ width: '20px', height: '20px' }} />
        </TransactionButton>
      )}
      {isModalOpen && <AddTransactionModal onCloseModal={handleClick} />}
    </>
  );
};

export default AddTransactionButton;
