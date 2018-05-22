import React, { Component } from 'react'
import Message from './Message'

class MessageList extends Component {
  render() {
    return (
      <div>
        <div className="row App-header">
          <div className="col-xs-4 text-left">Name</div>
          <div className="col-xs-8 text-left">Message</div>
        </div>
        { this.props.messages.map((msg) => <Message key={msg.id} message={msg} />) }
      </div>
    )
  }
}

export default MessageList
