import React, { Component } from 'react';
import { postChat } from '../actions';
import { connect } from 'react-redux';
import '../css/style.css'

class ChatFrom extends Component {
    constructor(props) {
        super(props);
        this.state = { nama: '', chat: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        this.props.addChat(this.state.nama, this.state.chat )
        this.setState({ chat: '' })
        // alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form className="footer" onSubmit={this.handleSubmit}>
                <div className="card" >
                    <li className="list-group-item borderless d-flex  align-items-center li">
                        <div className="speech-bubble col-3">
                            <div className="form-label-group mb-0">
                                <input type="text" name="nama" className="form-control border-2 py-4 bg-light " placeholder="Name" required={true}
                                    onChange={this.handleChange} value={this.state.nama} />
                            </div>
                        </div>
                        <div className="speech-bubble col-8">
                            <div className="input-group">
                                <input name="chat" type="text" placeholder="Type a message" aria-describedby="button-addon2" required={true}
                                    className="form-control border-2 py-4 bg-light"
                                    onChange={this.handleChange} value={this.state.chat} />
                            </div>
                        </div>
                        <div className="speech-bubble">
                            <div className="input-group">
                                <button type="submit" className="btn btn-primary btn-circle"><i className="fas fa-comment fa-2x"></i></button>
                            </div>
                        </div>
                    </li>
                </div>
            </form>

        );
    }
}

const mapDispatchToProps = dispatch => ({
    addChat: (nama, chat) => dispatch(postChat(nama, chat))
})

export default connect(
    null,
    mapDispatchToProps
)(ChatFrom)