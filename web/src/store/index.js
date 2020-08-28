import { createStore } from 'redux'

const INITIAL_STATE = {
    activeModal: false,
    serverRunning: '',
    submitted: [],
}

function reducer(state = INITIAL_STATE, action) {
    if (action.type === 'SET_MODAL_ACTIVE') {
        return { ...state, activeModal: true }
    }

    if (action.type === 'SET_MODAL_INACTIVE') {
        return { ...state, activeModal: false }
    }

    if (action.type === 'HANDLE_SUBMIT') {
        return { ...state, submitted: [action.data] }
    }

    if (action.type === 'TOGGLE_SERVER') {
        return { ...state, serverRunning: action.status }
    }

    return state
}

const store = createStore(reducer)

export default store