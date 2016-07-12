import React from 'react';
import MessageModel from '../models/MessageModel';

class MessageInput extends React.Component {
  constructor (){
    super ();

    this.model = new MessageModel();

    this.style = {
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      heigth: 50,
    };
  }



  sendMessage(event) {
    event.preventDefault();

    let message = this.refs.newMessage.value
    console.log("Message:", message);
    console.log("Username:", this.props.username);

    this.model.addResource({
      text: message,
      username: this.props.username
    });
  }


  render () {
    return (
      <div style= >
        <form onSubmit={ this.sendMessage.bind(this) }>
          <textarea ref="newMessage" placeholder="Type here..."></textarea>
          <input type="submit" value="Send" />
        </form>
      </div>
    );
  }
}

export default MessageInput;
