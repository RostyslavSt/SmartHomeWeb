import React from 'react';
import { settingsComponents } from '../../data/componentsNames';
import ToggleSettings from '../ToggleSettings/ToggleSettings';
import PropTypes from 'prop-types';
require('./Device.scss');

export const Device = (props) => {
  const device = props.device;
  const onStatusChange = props.onStatusChange;

  return (
    <seciton>
      <div className="device-view__header">
        <div className="device-view__name">
          <h3>{device.name}</h3>
          <small>Last updated 7 days ago</small>
        </div>
        <div className="device-item__info-status">
          <ToggleSettings
            id={props.device.id}
            onStatusChange={props.onStatusChange}/>
        </div>
        <div className="device-view__info">
          <small>07.06.2017</small><br/>
          <small>User</small>
        </div>
      </div>
      <div className="device-view__location">
        <h4>
          <i className="fa fa-map-marker"></i>{device.location}
        </h4>
      </div>
      <section className="device-view__settings">
        {device.items.map((setting, i) => {
          const SettingsComponent = settingsComponents[setting.name];

          return (
            <SettingsComponent
              key={'setting' + i}
              parent={'device-view__settings'}
              styleName={
                'device-view__settings-item device-view__settings-item--'
                + setting.name.toLowerCase()
            }/>);
        })}
      </section>
    </seciton>
  );
};

Device.propTypes = {
  device: PropTypes.object.isRequired,
  onStatusChange: PropTypes.func
};