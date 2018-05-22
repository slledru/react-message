import React, { Component } from 'react'
import AddMessageForm from '../containers/AddMessageForm'

class Message extends Component {
  constructor(props) {
    super(props)
    this.state = { inEditMode: false }
  }

  onClickSave = (event) => {
    console.log('Message:onClickSave')
    event.preventDefault()
    this.setState({
      ...this.state,
      inEditMode: false
    })
  }

  onClickDelete = (event) => {
    event.preventDefault()
    this.props.deleteMessage(this.props.message)
  }

  onClickEdit = (event) => {
    this.setState({
      ...this.state,
      inEditMode: true
    })
  }

  displayReadonly() {
    return (
      <div className="row message">
        <div className="col-xs-4 text-left">
          { this.props.message.name }
        </div>
        <div className="col-xs-6 text-left">
          { this.props.message.message }
        </div>
        <button className="col-xs-1 btn btn-primary" onClick={ this.onClickEdit }>Edit</button>
        <button className="col-xs-1 btn btn-primary" onClick={ this.onClickDelete }>Delete</button>
      </div>
    )
  }

  displayEditable() {
    return (
      <AddMessageForm addMessage={ this.props.editMessage }
        onClose={ this.onClickSave }
        message={ this.props.message }
        buttonText="Save"/>
    )
  }
  render() {
    if (this.state.inEditMode) {
      return this.displayEditable()
    }
    return this.displayReadonly()
  }
}

export default Message
