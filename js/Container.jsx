var React = require('react')

var Header = require('./Header.jsx')
var Dials  = require('./Dials.jsx')

var Container = React.createClass({
  render: function() {
    return (
      <div className="appc">
        <Header/>
        <Dials/>
      </div>
    )
  }
})

module.exports = Container
