var React = require('react')

var Header = React.createClass({
  render: function() {
    return (
      <nav className="titlebar">
        <a className="titlebar__brandtxt">Power Dashboard</a>
      </nav>
    )
  }
})

module.exports = Header
