var React = require('react')

var DialBox = require('./DialBox.jsx')

var Dials = React.createClass({
  render: function() {

    return (
    <div className="dials">

      <div className="dials__titlebar"><h3>Current Stats</h3></div>

        <div className="pure-g">
          <div className="pure-u-1-3"><DialBox label="Total Output"/></div>
          <div className="pure-u-1-3"><DialBox label="Battery Voltage"/></div>
          <div className="pure-u-1-3">
            <DialBox
              label="Water Pressure"
              value={`${this.props.readings.pressure}psi`}
              min={0}
              max={150}
            />
          </div>
        </div>


    </div>
    )
  }
})

module.exports = Dials
