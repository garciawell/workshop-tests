
import { all, fork } from 'redux-saga/effects';
import users from './modules/users/saga';

export default function* root() {
  yield all([
    fork(users),
    // fork(dynamics),
  ]);
}