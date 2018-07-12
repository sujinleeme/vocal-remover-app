import { MODAL_REQUESTING } from "./constants"

export const modalRequest = ({menuProps, menuType}) => {
	return {
		type: MODAL_REQUESTING,
		menuProps,
		menuType
	}
}
