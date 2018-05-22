import React from 'react'
import { connect } from 'react-redux'
import Message from './Message'

const MessageList = (props) => {
  const renderMessage = (msg) => {
    return (
      <Message key={msg.id} message={msg} />
    )
  }
  return (
    <div className="message-list">
      <div className="row App-header">
        <div className="col-xs-4 text-left">Name</div>
        <div className="col-xs-8 text-left">Message</div>
      </div>
      <div className="row">
        {
          props.messages.map(renderMessage)
        }
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { messages: state.messages }
}

export default connect(mapStateToProps)(MessageList)
