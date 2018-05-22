import React, { Component } from 'react'

class AddMessageForm extends Component {
  onClick = (event) => {
    event.preventDefault()
    const name = document.querySelector('#name').value
    const message = document.querySelector('#message').value
    this.props.addMessage({ name, message })
    document.querySelector('.form').reset()
  }

  render() {
    return (
      <div>
        <form className="row form">
          <div className="col-xs-4 text-left">
            <label>Name</label>
            <input id="name" className="input-name" placeholder="Enter a name" />
          </div>
          <div className="col-xs-6 text-left">
            <label>Message</label>
            <input id="message" className="input-message" placeholder="Enter a message" />
          </div>
          <button className="col-xs-1 btn btn-primary" onClick={ this.onClick }>Add</button>
        </form>
      </div>
    )
  }
}

export default AddMessageForm
