var React = require('react')

var DialBox = React.createClass({
  render: function() {

    return (
      <div className="dialbx">
        <h5 className="dialbx__label">{this.props.label}</h5>
        <h5 className="dialbx__value">{this.props.value || 500}</h5>
        <div className="dialbx__colorbar"></div>
      </div>
    )
  }
})

module.exports = DialBox
