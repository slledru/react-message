import React, { Component } from 'react'

class AddMessageForm extends Component {
  onClick = (event) => {
    event.preventDefault()
    const name = document.querySelector('#name').value
    const message = document.querySelector('#message').value
    if (this.props.onClose) {
      this.props.onClose(event)
    }
    const newMessage = { name, message }
    if (this.props.message) {
      newMessage.id = this.props.message.id
    }
    this.props.addMessage(newMessage)
    document.querySelector('.form').reset()
  }

  render() {
    let name = ''
    let msg = ''
    if (this.props.message) {
      name = this.props.message.name
      msg = this.props.message.message
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
          <button className="col-xs-1 btn btn-primary" onClick={ this.onClick }>{ this.props.buttonText }</button>
        </form>
      </div>
    )
  }
}

export default AddMessageForm
