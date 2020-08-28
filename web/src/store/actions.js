import axios from 'axios'

export function setModalActive() {
    return { type: 'SET_MODAL_ACTIVE' }
}

export function setModalInactive() {
    return {
        type: 'SET_MODAL_INACTIVE',
    }
}

export function setServerStatus(status) {
    return {
        type: 'TOGGLE_SERVER',
        status,
    }
}

export function handleSubmit(data, dispatch) {
    axios.post('http://localhost:3001/users', data)
        .then(() => {
            dispatch(setServerStatus(''))
        })
        .catch(err => {
            if (err.message === 'Network Error') dispatch(setServerStatus('Servidor fora de ar'))
        })

    dispatch(setModalInactive())

    return {
        type: 'HANDLE_SUBMIT',
        data: {...data, id: Math.random()},
    }
}