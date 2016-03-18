var React  = require('react')
var socket = require('socket.io-client')

var io = socket()

var Header = require('./Header.jsx')
var Dials  = require('./Dials.jsx')

var Container = React.createClass({
  getInitialState: function() {
    return {
      readings: {}
    }
  },
  render: function() {
    return (
      <div className="appc">
        <Header/>
        <Dials readings={this.state.readings}/>
      </div>
    )
  },
  componentDidMount: function() {
    io.on('readings', readings =>
      this.setState({readings})
    )
  }
})

module.exports = Container
