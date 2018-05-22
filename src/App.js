import React, { Component } from 'react'
import './App.css'
import { API_URL } from './constants'
import MessageList from './components/MessageList'
import AddMessageForm from './components/AddMessageForm'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { messages: [] }
  }
  async componentDidMount() {
    const response = await fetch(API_URL)
    const json = await response.json()
    this.setState({ ...this.state, messages: json })
  }

  addMessage = async ( body ) => {
    console.log('addMessage', body)
    const response = await fetch(API_URL, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
    const json = await response.json()
    console.log('json', json)
    this.setState({
      ...this.state,
      messages: [ json, ...this.state.messages ]
    })
  }

  deleteMessage = async ( message ) => {
    console.log('deleteMessage', message)
    const response = await fetch(`${API_URL}/${message.id}`, {
      method: 'DELETE'
    })
    const json = await response.json()
    console.log('json', json)
    this.setState({
      ...this.state,
      messages: [ ...this.state.messages.filter((msg) => msg.id !== message.id) ]
    })
  }

  editMessage = ( message ) => {
    console.log('editMessage', message)
  }

  render() {
    return (
      <div className="App container">
        <h3>Q3 Assessment</h3>
        <MessageList messages={ this.state.messages }
          deleteMessage={ this.deleteMessage }
          editMessage={ this.editMessage }/>
        <AddMessageForm addMessage={ this.addMessage }/>
      </div>
    )
  }
}

export default App
