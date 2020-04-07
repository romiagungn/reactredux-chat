const chats = (state = [], action) => {
    switch (action.type) {
        case 'LOAD_CHAT_SUCCESS':
            return action.dataChats.map((item) => {
                console.log(item, 'ini LOAD DATA')
                item.sent = true;
                return item
            })

        // ngirim kedepan
        case 'POST_CHAT':
            return [
                ...state,
                {
                    id: action.id,
                    nama: action.nama,
                    chat: action.chat,
                    sent: true
                }
            ]
        // ngirim kebelakang
        case 'POST_CHAT_SUCCESS':
            return state.map((item) => {
                console.log(action.chatData, action.chatData.id, 'ini POST SUKSES' )
                if (item.id !== action.chatData.id) {
                    item.sent = true;
                }
                return item
            })
        // ngirim kebelakang
        case 'POST_CHAT_FAILURE':
            return state.map((item) => {
                if (item.id === action.id) {
                    item.sent = false;
                }
                return item
            })

        case 'DELETE_CHAT':
            return state.filter((item) => item.id !== action.id)

        case 'DELETE_CHAT_SUCCESS':
            return state

        case 'LOAD_CHAT_FAILURE':
        case 'DELETE_CHAT_FAILURE':
        default:
            return state
    }
}

export default chats