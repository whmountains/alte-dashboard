var React = require('react')

var DialBox = require('./DialBox.jsx')

var Dials = React.createClass({
  render: function() {

    return (
    <div className="dials">

      <div className="dials__titlebar"><h3>Current Stats</h3></div>

        <div className="pure-g">
          <div className="pure-u-1-3"><DialBox label="Water Pressure"/></div>
          <div className="pure-u-1-3"><DialBox label="Turbine Output"/></div>
          <div className="pure-u-1-3"><DialBox label="Battery Voltage"/></div>
        </div>


    </div>
    )
  }
})

module.exports = Dials
