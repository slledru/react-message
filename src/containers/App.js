import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import '../App.css'
import { API_URL } from '../constants'
import getMessages from '../actions/actionGetMessages'
import MessageList from './MessageList'
import AddMessageForm from './AddMessageForm'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [],
      isOpen: false
    }
  }

  componentDidMount() {
    this.props.getMessages()
  }

  deleteMessage = async ( message ) => {
    const response = await fetch(`${API_URL}/${message.id}`, {
      method: 'DELETE'
    })
    if (response.status === 200) {
      const json = await response.json()
      this.setState({
        ...this.state,
        messages: [ ...this.state.messages.filter((msg) => msg.id !== json.id) ]
      })
    }
  }


  render() {
    return (
      <div className="App container">
        <h3>Q3 Assessment</h3>
        <MessageList />
        <AddMessageForm buttonText="Add"/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { ...state }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getMessages }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
