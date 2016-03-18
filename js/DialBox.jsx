var React = require('react')

var Dial = require('./Dial.jsx')

var DialBox = React.createClass({
  render: function() {

    return (
      <div className="dialbx">
        <div className="dialbx__titlec">
          <h5 className="dialbx__label">{this.props.label}</h5>
        </div>
        <Dial
          value={this.props.value}
          min={this.props.min}
          max={this.props.max}
        />
        <div className="dialbx__colorbar"></div>
      </div>
    )
  }
})

module.exports = DialBox