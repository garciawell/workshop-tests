import { call, takeLatest, put } from 'redux-saga/effects';
import axios from "axios"
// import api from './services/api';
import { Types as UsersTypes } from '../../modules/users/actions';


export function* getUsers() {
  try {
    const { data } = yield call(axios.get, "https://api.github.com/users");

    console.log("response", data)

    yield put({ type: UsersTypes.GET_SUCCESS, payload: data });

  } catch (err) {
    console.log('OPSS', err)
    // yield Toast('error', MESSAGE.errorRequest);
    // yield put({ type: UsersTypes.GET_FAILURE });
  }
}

export default function* saga() {
  yield takeLatest(UsersTypes.GET_REQUEST, getUsers);
}