import {
  LOAD_DEVICES,
  LOAD_DEVICES_SUCCESS,
  LOAD_DEVICE_SUCCESS,
  LOAD_DEVICE,
  LOAD_DEVICES_FAILURE,
  DELETE_DEVICE,
  DELETE_DEVICE_ASYNC,
  LOAD_DEVICE_ASYNC,
  CHANGE_STATUS,
  SEARCH_ITEM,
  CHANGE_FILTER_OPTION,
  LIST_SET_ITEM_VALUE } from '../constants/index';
import DeviceListApi from '../api/deviceListApi';
import { put, call } from 'redux-saga/effects';

export const loadDevices = () => {
  return {
    type: LOAD_DEVICES
  };
};

export const loadDevicesSuccess = (devices) => {
  return {
    type: LOAD_DEVICES_SUCCESS,
    devices
  };
};

export const loadDevicesFail = () => {
  return {
    type: LOAD_DEVICES_FAILURE
  };
};

export const loadDevice = (id) => {
  return {
    type: LOAD_DEVICE,
    id
  };
};

export const loadDeviceAsync = (id) => {
  return {
    type: LOAD_DEVICE_ASYNC,
    id
  };
};
export const loadDeviceSuccess = (device) => {
  return {
    type: LOAD_DEVICE_SUCCESS,
    device
  };
};

export const deleteDeviceSuccess = (id) => ({
  type: DELETE_DEVICE,
  id
});

export const deleteDeviceAsync = (id) => ({
  type: DELETE_DEVICE_ASYNC,
  id
});

export const changeStatus = (device) => {
  return {
    type: CHANGE_STATUS,
    device
  };
};

export const listSetItemValue = (value, id) => {
  return {
    type: LIST_SET_ITEM_VALUE,
    value,
    id
  };
};

export const searchAction = (searchValue) => {
  return {
    type: SEARCH_ITEM,
    searchValue
  };
};

export const filterAction = (filterOption) => {
  return {
    type: CHANGE_FILTER_OPTION,
    filterOption
  };
};