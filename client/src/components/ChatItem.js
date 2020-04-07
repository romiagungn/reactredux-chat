import React from 'react';
import '../css/style.css'
import '../css/timeline.css'
import ReactMarkdown from 'react-markdown';

export default function ChatItem(props) {
    const timestamp = props.action.id
    return (
        <div className="container py-2">
            <div className="qa-message-list" id="wallmessages">
                <div className="message-item" id="m16">
                    <div className="message-inner">
                        <div className="message-head clearfix">
                            <div className="avatar pull-left"><img src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png" /></div>
                            <div className="user-detail">
                                <div className="d-flex justify-content-between name d-flex handle" >
                                    <h5>{props.action.nama}</h5>
                                    <button className="btn btn-link px-0 py-0" onClick={props.action.sent ? props.remove : props.resend} >
                                        {props.action.sent ? <i className="fas fa-trash" ></i> : <i className="fas fa-repeat fa-lg"></i>}
                                    </button>
                                </div>
                                <div className="post-meta">
                                    <div className="asker-meta">
                                        <span className="qa-message-what"></span>
                                        <span className="qa-message-when">
                                            <span className="qa-message-when-data">{ Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit'}).format(timestamp) }</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="qa-message-content">
                            <ReactMarkdown source={props.action.chat} classNameName="mb-0 text-small" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}