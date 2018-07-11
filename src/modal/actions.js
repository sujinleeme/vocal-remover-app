import { MODAL_REQUESTING } from "./constants"

export const modalRequest = ({modalProps, modalType}) => {
	return {
		type: MODAL_REQUESTING,
		modalProps,
		modalType
	}
}
