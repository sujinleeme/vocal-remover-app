import { MODAL_REQUESTING } from "./constants"

export const modalRequest = ({modalType, modalProps}) => {
	return {
		type: MODAL_REQUESTING,
		modalType,
		modalProps,
		
	}
}
