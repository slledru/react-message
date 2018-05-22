import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import addMessage from '../actions/actionAddMessage'
import editMessage from '../actions/actionEditMessage'

const AddMessageForm = (props) => {
  const onClick = (event) => {
    event.preventDefault()
    const name = document.querySelector('#name').value
    const message = document.querySelector('#message').value
    const newMessage = { name, message }
    if (props.message) {
      newMessage.id = props.message.id
      props.editMessage(newMessage)
    }
    else {
      props.addMessage(newMessage)
    }
    document.querySelector('.form').reset()
  }

  let name = ''
  let msg = ''
  if (props.message) {
    name = props.message.name
    msg = props.message.message
  }
  return (
    <div>
      <form className="row form">
        <div className="col-xs-4 text-left">
          <label>Name</label>
          <input id="name" className="input-name" placeholder="Enter a name" defaultValue={ name }/>
        </div>
        <div className="col-xs-6 text-left">
          <label>Message</label>
          <input id="message" className="input-message" placeholder="Enter a message" defaultValue={ msg }/>
        </div>
        <button className="col-xs-1 btn btn-primary" onClick={ onClick }>{ props.buttonText }</button>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { ...state }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ addMessage, editMessage }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AddMessageForm)
