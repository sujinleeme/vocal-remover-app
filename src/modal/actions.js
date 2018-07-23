import { MODAL_REQUESTING } from "./constants"

export const modalRequest = ({modalType, modalOpen}) => {
	return {
		type: MODAL_REQUESTING,
		modalType,
		modalOpen,
	}
}
