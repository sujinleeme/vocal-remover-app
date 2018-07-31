import { MODAL_REQUESTING } from './constants';

export const modalRequest = ({ modalType, modalOpen }) => ({
  type: MODAL_REQUESTING,
  modalType,
  modalOpen,
});
