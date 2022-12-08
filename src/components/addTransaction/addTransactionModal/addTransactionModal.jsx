import React, { Fragment } from 'react';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import AddTransactionForm from '../addTransactionForm/addTransactionForm';
import { Backdrop, Modal, CloseButton } from './addTransactionModal.styled';
import { VscChromeClose } from 'react-icons/vsc';
import Media from 'react-media';
import { useDispatch } from 'react-redux';
import { toggleModalOpen } from '../../../redux/userSlice';

const modalRoot = document.querySelector('#modal-root');

const AddTransactionModal = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener('keydown', onEscapeClose);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', onEscapeClose);
      document.body.style.overflow = 'auto';
    };
  });
  const handleModalClose = () => dispatch(toggleModalOpen(false));

  const onEscapeClose = e => {
    if (e.code === 'Escape') {
      dispatch(toggleModalOpen(false));
    }
  };
  const onBackdropClick = e => {
    if (e.target === e.currentTarget) {
      dispatch(toggleModalOpen(false));
    }
  };
  return createPortal(
    <Backdrop onClick={onBackdropClick}>
      <Modal>
        <Media
          queries={{
            small: '(max-width: 767px)',
            medium: '(min-width: 768px) and (max-width: 1199px)',
            large: '(min-width: 1280px)',
          }}
        >
          {matches => (
            <Fragment>
              {matches.medium && (
                <CloseButton type="button" onClick={handleModalClose}>
                  <VscChromeClose style={{ width: '16px', height: '16px' }} />
                </CloseButton>
              )}
              {matches.large && (
                <CloseButton type="button" onClick={handleModalClose}>
                  <VscChromeClose style={{ width: '16px', height: '16px' }} />
                </CloseButton>
              )}
            </Fragment>
          )}
        </Media>

        <AddTransactionForm onCancel={handleModalClose} />
      </Modal>
    </Backdrop>,
    modalRoot
  );
};

export default AddTransactionModal;
