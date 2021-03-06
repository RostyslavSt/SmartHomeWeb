import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './index.scss';
import { SettingsList } from '../SettingsList/SettingsList';
import {
  addDescription,
  setItemValue,
  setParameters } from '../../actions/builder.action';
import { bindActionCreators } from 'redux';

const Prototype = (props) => (
  <div className="Prototype">
    <h3>{props.device.name || 'Device name'}</h3>
    <SettingsList
      addDescription={props.addDescription}
      settings={props.device}
      deleteItem={props.deleteItem}
      setItemValue={props.setItemValue}
      setParameters={props.setParameters}
    />
  </div>
);

function mapStateToProps (store) {
  return {
    settings: store.builder.device
  };
}

function mapDispatchToProps (dispatch) {
  return {
    addDescription: bindActionCreators(addDescription, dispatch),
    setItemValue: bindActionCreators(setItemValue, dispatch),
    setParameters: bindActionCreators(setParameters, dispatch)
  };
}

Prototype.propTypes = {
  device: PropTypes.object,
  addDescription: PropTypes.func,
  deleteItem: PropTypes.func,
  setItemValue: PropTypes.func,
  settings: PropTypes.object,
  setParameters: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Prototype);
