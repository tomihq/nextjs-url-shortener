import { IStateForm, IStateFormAction } from "../../interfaces"

export const formReducer = (state: IStateForm, action: IStateFormAction) => {
    switch (action.type) {
        case 'start_loading': {
            return {
                ...state,
                isLoading: true
            }
        }
        case 'end_loading': {
            return {
                ...state,
                isLoading: false
            }
        }
        case 'send_form':
            return {
                ...state,
                hasSentForm: true
            }
        case 'set_error':
            return {
                ...state,
                error: true
            }
        case 'remove_error':
            return {
                ...state,
                error: false
            }
        case 'set_shortned_url':
            return {
                ...state,
                shortnedUrl: action.payload
            }
        default:
            return state;
    }
}