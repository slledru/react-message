import React from 'react'

const Message = (props) => {
  const onClickEdit = (event) => {
    event.preventDefault()
    props.editMessage(props.message)
  }

  const onClickDelete = (event) => {
    event.preventDefault()
    props.deleteMessage(props.message)
  }

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

export default Message
