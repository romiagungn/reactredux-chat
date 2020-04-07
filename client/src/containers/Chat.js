import { connect } from 'react-redux'
import { deleteChat, resendChat } from '../actions'
import ChatItem from '../components/ChatItem'

const mapDispatchToProps = (dispatch, ownProps) => ({
    remove: () => dispatch(deleteChat(ownProps.action.id)),
    resend: () => dispatch(resendChat(ownProps.action.id , ownProps.action.nama, ownProps.action.chat))
})

export default connect(
    null,
    mapDispatchToProps
)(ChatItem)