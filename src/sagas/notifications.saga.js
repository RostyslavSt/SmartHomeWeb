import { call, put, takeEvery } from 'redux-saga/effects';
import { getNotifications } from '../api/notificationsApi';
import { fetchNotificationsSuccess } from '../actions/loadNotifications.action';

function* fetchNotifications () {
  const notifications = yield call(getNotifications);

  yield put(fetchNotificationsSuccess(notifications));
}
export default function* notificationsSaga () {
  yield takeEvery('NOTIFICATIONS_FETCH_REQUESTED', fetchNotifications);
}