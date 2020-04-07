
import React, { Component } from 'react';
import ChatItem from './Chat';
import { connect } from 'react-redux';
import { loadChat } from '../actions'

class ChatList extends Component {
    scrollToBottom = () => {
        this.chatEnd.scrollIntoView({ behavior: "smooth" });
    }

    componentDidMount() {
        this.props.loadChat();
        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    render() {
        const listItems = this.props.chats.map((item, index) =>
            <ChatItem key={index} action={{ ...item }} />

        );

        return (

            <ol>
                {listItems}
                <div style={{ float: "left", clear: "both" }}
                    ref={(el) => { this.chatEnd = el; }}>
                </div>
            </ol >
        )
    }
}

const mapStateToProps = (state) => ({
    chats: state.chats
})

const mapDispatchToProps = (dispatch) => ({
    loadChat: () => dispatch(loadChat())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChatList)