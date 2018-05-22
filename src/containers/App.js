import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import '../App.css'
import getMessages from '../actions/actionGetMessages'
import MessageList from './MessageList'
import AddMessageForm from './AddMessageForm'

class App extends Component {
  componentDidMount() {
    this.props.getMessages()
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
