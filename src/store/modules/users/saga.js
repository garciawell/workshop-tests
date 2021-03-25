import { call, takeLatest, put } from 'redux-saga/effects';
import axios from "axios"
// import api from './services/api';
import { Types as UsersTypes } from '../../modules/users/actions';
import usersAuth from '../../../services/api';


export function* getUsers() {
  try {
    const { data } = yield call(usersAuth.users, {
      method: "get"
    });

    console.log("response", data)

    yield put({ type: UsersTypes.GET_SUCCESS, payload: data });

  } catch (err) {
    yield put({ type: UsersTypes.GET_FAILURE });
  }
}

export default function* saga() {
  yield takeLatest(UsersTypes.GET_REQUEST, getUsers);
}