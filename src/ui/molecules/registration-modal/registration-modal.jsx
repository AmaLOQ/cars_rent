import * as React from 'react';
import Modal from '@mui/material/Modal';
import { ButtonBlack } from '../../atoms/buttons/black-button/black-button';
import { PopupRegistrationkDesk } from '../../organisms/registration-popup/registration-popup';

export const KeepMountedModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <ButtonBlack text="регистрация" onClick={handleOpen}/>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <PopupRegistrationkDesk/>
      </Modal>
    </>
  );
}