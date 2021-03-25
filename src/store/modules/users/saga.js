import { call, takeLatest, put, select } from 'redux-saga/effects';
import axios from "axios"
// import api from './services/api';
import { Types as UsersTypes } from '../../modules/users/actions';
import usersAuth from '../../../services/api';


export function* getUsers({ forbidden }) {
  const getInfs = yield select(state => state.users)

  // console.log("DATAAA>>>>", getInfs)

  if(forbidden) {
    yield put({ type: UsersTypes.GET_FAILURE });
    return
  }

  try {
    const { data } = yield call(usersAuth.users, {
      method: "get"
    });

    yield put({ type: UsersTypes.GET_SUCCESS, payload: data });

  } catch (err) {
    yield put({ type: UsersTypes.GET_FAILURE });
  }
}

export default function* saga() {
  yield takeLatest(UsersTypes.GET_REQUEST, getUsers);
}