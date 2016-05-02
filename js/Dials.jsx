var React = require('react')

var DialBox = require('./DialBox.jsx')

var Dials = React.createClass({
  render: function() {

    return (
    <div className="dials">

      <div className="dials__titlebar"><img src="icons/dial-icon.svg"/><h3>Current Stats</h3></div>

        <div className="pure-g">
          <div className="pure-u-1-3">
            <DialBox label="Total Output" icon="icons/turbine-icon.svg"/>
          </div>
          <div className="pure-u-1-3">
            <DialBox label="Battery Voltage" icon="icons/battery-icon.svg"/>
          </div>
          <div className="pure-u-1-3">
            <DialBox
              label="Water Pressure"
              value={this.props.readings.pressure}
              unit={'psi'}
              min={0}
              max={150}
              icon="icons/gauge-icon.svg"
            />
          </div>
        </div>


    </div>
    )
  }
})

module.exports = Dials
