import React from 'react'

const Message = ({ message }) => {
  return (
    <div className="row message">
      <div className="col-xs-4 text-left">
        { message.name }
      </div>
      <div className="col-xs-6 text-left">
        { message.message }
      </div>
      <button className="col-xs-1 btn btn-primary">Edit</button>
      <button className="col-xs-1 btn btn-primary">Delete</button>
    </div>
  )
}

export default Message
