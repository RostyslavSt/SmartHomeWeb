import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import { SettingsList } from '../SettingsList/SettingsList';

export const Prototype = (props) => (
  <div className='Prototype'>
    <h3>{props.device.name}</h3>
    <SettingsList
      settings={props.device}
      deleteItem={props.deleteItem}
    />
  </div>
);

Prototype.propTypes = {
  device: PropTypes.object,
  deleteItem: PropTypes.func
};
