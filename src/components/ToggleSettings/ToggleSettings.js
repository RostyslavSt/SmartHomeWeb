import React from 'react';
import PropTypes from 'prop-types';
import './ToggleStyle.scss';

export default class ToggleSettings extends React.Component {

  constructor (props) {
    super(props);
    this.onChangeValue = this.onChangeValue.bind(this);
  }
  componentDidMount () {
    this.props.setItemValue(false, this.props.itemId);
  }
  onChangeValue (e) {
    this.props.setItemValue(!this.props.checked, this.props.itemId);
  }

  render () {
    return (
      <div className={ `${ this.props.styleName }` }>
        <label className="switch">
          <input
            type="checkbox"
            checked={this.props.checked}
            onChange={this.onChangeValue}
          />
          <div className="slider round"></div>
        </label>
      </div>
    );
  }
}

ToggleSettings.propTypes = {
  device: PropTypes.object,
  styleName: PropTypes.string,
  checked: PropTypes.bool.isRequired,
  setItemValue: PropTypes.func,
  itemId: PropTypes.any,
  newValue: PropTypes.string
};
ToggleSettings.defaultProps = {
  checked: false
};
