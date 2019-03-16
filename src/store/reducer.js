import * as actionTypes from './action';

const initialState = {
    smh: [],
    blogList: [],
    formState: {
        firstName: '',
        lastName: '',
        email: '',
        projectIdea: '',
        budget: ''
    }
}

const reducer = (state = initialState, action) => {
    switch( action.type ) {
        case actionTypes.HANDLE_FORM_CHANGE:
            const tempFormState = {...state.formState};
            tempFormState[action.payload.key] = action.payload.value;
            return {
                ...state,
                formState: tempFormState 
            }
        case actionTypes.CONTACT_COMPONENT_DID_MOUNT:
            return {
                ...state, 
                formState: action.value
            }
        case actionTypes.DOWNLOAD_SMH: 
            return {
                ...state, 
                smh: action.data
            }
        case actionTypes.DOWNLOAD_BLOG_LIST: 
            return {
                ...state, 
                blogList: action.data
            }
    }
    return state;
}

export default reducer;