var React = require('react')

var Header = React.createClass({
  render: function() {
    return (
      <nav className="titlebar">
        <a className="titlebar__brandtxt">Power Dashboard</a><img src="icons/power-icon.svg"/>
      </nav>
    )
  }
})

module.exports = Header
