import { HIDE_MODAL, SHOW_MODAL } from "./constants"

export const showModal = ({modalType, modalProps}) => {
	type: SHOW_MODAL
	modalType,
		modalProps
}

export const closeModal = ({modalType, modalProps}) => {
	type: HIDE_MODAL
	modalType,
		modalProps
}


