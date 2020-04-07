// actions ngirim ke reducer
import axios from 'axios'

const API_URL = 'http://localhost:3001/api/'

const request = axios.create({
    baseURL: API_URL,
    timeout: 1000
});

// start load chat data
export const loadChatSuccess = (dataChats) => ({
    type: 'LOAD_CHAT_SUCCESS',
    dataChats
})

export const loadChatFailure = () => ({
    type: 'LOAD_CHAT_FAILURE'
})

export const loadChat = () => {
    return async dispatch => {
        try {
            const response = await request.get('chats');
            dispatch(loadChatSuccess(response.data));
        }
        catch (error) {
            console.error(error);
            dispatch(loadChatFailure());
        }
    }
}

// end load chat data

// start post chat data

const postChatSuccess = (chatData) => ({
    type: 'POST_CHAT_SUCCESS',
    chatData
})

const postChatFailure = (id) => ({
    type: 'POST_CHAT_FAILURE', id
})

const postChatRedux = (id, nama, chat) => ({
    type: 'POST_CHAT', id, nama, chat
})


export const postChat = (nama, chat) => {
    let id = Date.now();
    return async dispatch => {
        dispatch(postChatRedux(id, nama, chat))
        try {
            const response = await request.post('chats', { id, nama, chat });
            dispatch(postChatSuccess(response.data));
        }
        catch (error) {
            console.error(error);
            dispatch(postChatFailure(id));
        }
    }
}

// end post chat data

// start delete chat data

const deleteChatRedux = (id) => ({
    type: 'DELETE_CHAT', id
})

const deleteChatSuccess = (chats) => ({
    type: 'DELETE_CHAT_SUCCESS',
    chats
})

const deleteChatFailure = () => ({
    type: 'DELETE_CHAT_FAILURE'
})


export const deleteChat = (id) => {
    return async dispatch => {
        dispatch(deleteChatRedux(id))
        try {
            const response = await request.delete(`chats/${id}`);
            dispatch(deleteChatSuccess(response.data));
        }
        catch (error) {
            console.error(error);
            dispatch(deleteChatFailure());
        }
    }
}

// end delete chat data

export const resendChat = (id, nama, chat) => {
    return dispatch => {
        return request.post('chats', { id, nama, chat })
            .then(function (response) {
                dispatch(postChatSuccess(response.data))
                console.log(postChatSuccess(response.data))
            })
            .catch(function (error) {
                console.error(error);
                dispatch(postChatFailure(id))
            });
    }
}