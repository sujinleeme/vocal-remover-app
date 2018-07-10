import { MODAL_REQUESTING, MODAL_SUCCESS, MODAL_FAIL } from "./constants"

export const modalRequest = ({modalProps, modalType}) => {
	return {
		type: MODAL_REQUESTING,
		modalProps,
		modalType
	}
}
