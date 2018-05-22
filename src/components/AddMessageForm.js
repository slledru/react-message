import React, { Component } from 'react'

class AddMessageForm extends Component {
  render() {
    return (
      <div>
        <form className="row form">
          <div className="col-xs-4 text-left">
            <label>Name</label>
            <input className="input-name" placeholder="Enter a name" />
          </div>
          <div className="col-xs-6 text-left">
            <label>Message</label>
            <input className="input-message" placeholder="Enter a message" />
          </div>
          <button className="col-xs-1 btn btn-primary">Add</button>
        </form>
      </div>
    )
  }
}

export default AddMessageForm
