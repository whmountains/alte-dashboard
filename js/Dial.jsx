var React = require('react')

var Dial = require('react-dial')

var AppDial = React.createClass({
  render: function() {
    return (
      <div className="dialbx__dial">
        <Dial
          value={this.props.value}
          angleOffset={135}
          angleArc={270}
          lineCap="round"
          readOnly={true}
          min={this.props.min}
          max={this.props.max}
          fontSize="50px"
        />
      </div>
    )
  }
})

module.exports = AppDial
