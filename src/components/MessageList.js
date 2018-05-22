import React, { Component } from 'react'
import Message from './Message'

class MessageList extends Component {
  renderMessage = (msg) => {
    return (
      <Message key={msg.id} message={msg}
        deleteMessage={ this.props.deleteMessage }
        editMessage={ this.props.editMessage }/>
    )
  }
  render() {
    return (
      <div>
        <div className="row App-header">
          <div className="col-xs-4 text-left">Name</div>
          <div className="col-xs-8 text-left">Message</div>
        </div>
        { this.props.messages.map(this.renderMessage) }
      </div>
    )
  }
}

export default MessageList
