import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import AddMessageForm from '../containers/AddMessageForm'
import toggleEditMessage from '../actions/actionBeginEdit'
import deleteMessage from '../actions/actionDeleteMessage'

const Message = (props) => {
  const onClickSave = (event) => {
    console.log('Message:onClickSave')
    event.preventDefault()
    props.editMessage(props.message)
    props.toggleEditMessage(props.message)
  }

  const onClickDelete = (event) => {
    event.preventDefault()
    props.deleteMessage(props.message)
  }

  const onClickEdit = (event) => {
    event.preventDefault()
    props.toggleEditMessage(props.message)
  }

  const displayReadonly = () => {
    return (
      <div className="row message">
        <div className="col-xs-4 text-left">
          { props.message.name }
        </div>
        <div className="col-xs-6 text-left">
          { props.message.message }
        </div>
        <button className="col-xs-1 btn btn-primary" onClick={ onClickEdit }>Edit</button>
        <button className="col-xs-1 btn btn-primary" onClick={ onClickDelete }>Delete</button>
      </div>
    )
  }

  const displayEditable = () => {
    return (
      <AddMessageForm addMessage={ props.editMessage }
        onClose={ onClickSave }
        message={ props.message }
        buttonText="Save"/>
    )
  }

  if (props.message.inEditMode) {
    return (
      <div>
        { displayReadonly() }
        { displayEditable() }
      </div>
    )
  }
  return (
    displayReadonly()
  )
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ toggleEditMessage, deleteMessage }, dispatch)
}

export default connect(null, mapDispatchToProps)(Message)
