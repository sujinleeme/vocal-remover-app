import {
	INIT_MODAL,
	MODAL_REQUESTING, MODAL_SUCCESS, MODAL_FAIL
} from "./constants"

const initialState = {
	modalType: INIT_MODAL,
	modalProps: false,
	requesting: false,
	successful: false,
	errors: []
}

const reducer = (state = initialState, action) => {
	
	switch (action.type) {
		case MODAL_REQUESTING:
			return {
				...state,
				requesting: true
			}
		
		case MODAL_SUCCESS:
			return {
				...state,
				modalType: action.modalType,
				modalProps: action.modalProps,
				requesting: false,
				successful: true
			}
		
		case MODAL_FAIL:
			return {
				modalType: null,
				modalProps: null,
				errors: state.errors.concat([{
					body: action.error.toString(),
					time: new Date()
				}]),
				requesting: false,
				successful: false
			}
		
		default:
			return state
	}
}

export default reducer
