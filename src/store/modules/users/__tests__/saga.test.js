import { runSaga } from 'redux-saga';
import { takeLatest } from 'redux-saga/effects';
import { Creators } from '../actions';
import saga, { getUsers } from '../saga';
import {  Types } from '../actions';
import usersAuth from '../../../../services/api';

const gen = saga();
let mockResponse;

describe('SAGAS getUsers', () => {
    mockResponse = [{
        avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
        events_url: "https://api.github.com/users/mojombo/events{/privacy}",
        followers_url: "https://api.github.com/users/mojombo/followers",
        following_url: "https://api.github.com/users/mojombo/following{/other_user}",
        gists_url: "https://api.github.com/users/mojombo/gists{/gist_id}",
        gravatar_id: "",
        html_url: "https://github.com/mojombo",
        id: 1,
        login: "mojombo"
    }]

  it('Should be able to call getSalesData saga if call action GET_SALES_DATA_REQUEST', () => {
    expect(gen.next().value).toEqual(
        takeLatest(Types.GET_REQUEST, getUsers)
    );
  }, 3000);

  it('Should be able to success request', async () => {
    const dispatched = [];
    usersAuth.users = jest.fn(() =>
      Promise.resolve({ data: mockResponse, status: 200 })
    );

    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
        getState: () => ({ state: 'test' }),
      },
      getUsers,
      {
        payload: { token: 123 },
      }
    ).toPromise();

    expect(usersAuth.users.mock.calls.length).toBe(1);
    expect(dispatched).toContainEqual(
      Creators.getUsersSuccess(mockResponse)
    );
  });

  it('Should be able to failure request', async () => {
    const dispatched = [];
    mockResponse = {
      response: true,
      status: 400,
    };
    usersAuth.users = jest.fn(() =>
      Promise.reject(mockResponse)
    );

    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
        getState: () => ({ state: 'test' }),
      },
      getUsers,
      {
        payload: { token: 123 },
        isServer: true,
      }
    ).toPromise();

    expect(usersAuth.users.mock.calls.length).toBe(1);
    expect(dispatched).toContainEqual(Creators.getUsersFailure());
  });
});