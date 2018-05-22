import React, { Component } from 'react'
import './App.css'
import { GET_API } from './constants'
import MessageList from './components/MessageList'
import AddMessageForm from './components/AddMessageForm'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { messages: [] }
  }
  async componentDidMount() {
    console.log('here?')
    const response = await fetch(GET_API)
    const json = await response.json()
    console.log(json)
    this.setState({ ...this.state, messages: json })
  }

  render() {
    return (
      <div className="App container">
        <h3>Q3 Assessment</h3>
        <MessageList messages={ this.state.messages } />
        <AddMessageForm />
      </div>
    )
  }
}

export default App
