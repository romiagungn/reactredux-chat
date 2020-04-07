import React, { Component } from 'react';
import ChatForm from '../containers/ChatForm';
import ChatList from '../containers/ChatList';
import '../css/style.css';


export default class ChatBox extends Component {

    render() {
        return (
            <div className="py-5" >
                <div className="card">
                    <h2 className="card-header text-center">React Chat App</h2>
                </div>
                <div className="column">
                    <div className="gambar">
                        <div className="scrollable" style={{ maxHeight: '67vh', overflowY: 'auto' }}>
                        <ChatList />
                        </div>
                    </div>
                </div>
                <ChatForm style={{ overflowY: 'auto' }} />
            </div >
        );
    }
};