import React from 'react';
import PropTypes from 'prop-types';
import './TimerStyle.scss';
import RangeSettings from '../RangeSettings/Range';

export default class TimerSettings extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      hours: 0,
      minutes: 0
    };
  }

  componentDidMount () {
    if (typeof this.props.data !== 'undefined') {
      const time = this.props.data.split(':');

      this.setState({
        hours:time[0],
        minutes:time[1]
      });
    }
  }

  changeHours = (event) => {
    this.setState({
      hours: event.target.value
    });
  }

  changeMinutes = (event) => {
    this.setState({
      minutes: event.target.value
    });
  }

  setTimerValue = () => {
    this.props.setItemValue(`${this.state.hours}:${this.state.minutes}`,
    this.props.itemId,
    this.props.deviceId);
  }

  hoursKeyDown = (event) => {
    if ((event.keyCode < 47 || event.keyCode > 58) && event.keyCode !== 8) {
      event.preventDefault();
    }
    if (parseInt(event.target.value + event.key) > 99) {
      event.preventDefault();
    }
  }

  minutesKeyDown = (event) => {
    if ((event.keyCode < 47 || event.keyCode > 58) && event.keyCode !== 8) {
      event.preventDefault();
    }
    if (parseInt(event.target.value + event.key) > 59) {
      event.preventDefault();
    }
  }

  render () {
    return (
      <div className={`m-time ${this.props.styleName}`}>
        <div className="showtime">
          <input
          className="showtime__time"
          type="text"
          value={this.state.hours}
          onChange={this.changeHours}
          onKeyDown={this.hoursKeyDown}
          />
          <span className="showtime__separater">:</span>
          <input
          className="showtime__time"
          type="text"
          value={this.state.minutes}
          onChange={this.changeMinutes}
          onKeyDown={this.minutesKeyDown}
          />
        </div>

        <div className="sliders">
          <div className="sliders__time-text">Hours</div>
          <RangeSettings
            className="u-slider-time"
            min={0}
            max={99}
            setItemValue={this.props.setItemValue}
            onTimerChange={this.changeHours}
            setTimerValue={this.setTimerValue}
            hideLabel={true}
            data={this.state.hours}
          />
          <div className="sliders__time-text">Minutes</div>
          <RangeSettings
            className="u-slider-time"
            min={0}
            max={59}
            setItemValue={this.props.setItemValue}
            onTimerChange={this.changeMinutes}
            setTimerValue={this.setTimerValue}
            hideLabel={true}
            data={this.state.minutes}
          />
        </div>
      </div>
    );
  }
}
TimerSettings.propTypes = {
  styleName: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  setItemValue: PropTypes.func,
  itemId: PropTypes.number,
  newValue: PropTypes.string,
  data: PropTypes.string,
  deviceId: PropTypes.string
};
