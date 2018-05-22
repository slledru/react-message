import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import './App.css'
import { API_URL } from './constants'
import getMessages from './actions/actionGetMessages'
import MessageList from './components/MessageList'
import AddMessageForm from './components/AddMessageForm'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [],
      isOpen: false
    }
  }

  componentDidMount() {
    // const response = await fetch(API_URL)
    // if (response.status === 200) {
    //   const json = await response.json()
    //   this.setState({ ...this.state, messages: json })
    // }
    this.props.getMessages()
  }

  addMessage = async ( body ) => {
    const response = await fetch(API_URL, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
    if (response.status === 200) {
      const json = await response.json()
      this.setState({
        ...this.state,
        messages: [ json, ...this.state.messages ]
      })
    }
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

  editMessage = async ( message ) => {
    const response = await fetch(`${API_URL}/${message.id}`, {
      method: 'PATCH',
      body: JSON.stringify(message),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
    if (response.status === 200) {
      const json = await response.json()
      this.setState({
        ...this.state,
        messages: [ ...this.state.messages.map((msg) => {
          if (msg.id === json.id) {
            return message
          }
          return msg
        }) ]
      })
    }
  }

  render() {
    return (
      <div className="App container">
        <h3>Q3 Assessment</h3>
        <MessageList messages={ this.props.messages }
          deleteMessage={ this.deleteMessage }
          editMessage={ this.editMessage }/>
        <AddMessageForm addMessage={ this.addMessage } buttonText="Add"/>
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
