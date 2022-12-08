import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLogOutMutation } from '../../redux/authSlice';
import { authApi } from '../../redux/authSlice';
import { VscChromeClose } from 'react-icons/vsc';
import {
  Backdrop,
  Modal,
  CloseButton,
  TextModal,
  ModalButton,
  Overlay,
} from './modalLogOut.styled';
import { Box } from 'components/Box';

const modalRoot = document.querySelector('#modal-root');

function ModalLogOut({ onClickClose }) {
  const onEscapePress = e => {
    return e.code === 'Escape' && onClickClose();
  };

  useEffect(() => {
    window.addEventListener('keydown', onEscapePress);
    return () => window.removeEventListener('keydown', onEscapePress);
  });

  const token = useSelector(state => state.userInformation.token);
  const [logOut] = useLogOutMutation();

  const dispatch = useDispatch();

  const onClickLogOut = async () => {
    await logOut(token);

    dispatch(authApi.util.resetApiState());
  };

  return createPortal(
    <Backdrop>
      <Overlay onClick={onClickClose}></Overlay>
      <Modal>
        <CloseButton type="button" onClick={onClickClose}>
          <VscChromeClose style={{ width: '16px', height: '16px' }} />
        </CloseButton>
        <TextModal>Are you want to log out?</TextModal>
        <Box display="flex">
          <ModalButton type="button" onClick={onClickLogOut}>
            Yes
          </ModalButton>
          <ModalButton type="button" onClick={onClickClose}>
            No
          </ModalButton>
        </Box>
      </Modal>
    </Backdrop>,
    modalRoot
  );
}

export default ModalLogOut;
