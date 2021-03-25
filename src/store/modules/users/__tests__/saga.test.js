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

  it('Should be able to call getUsers saga if call action GET_REQUEST', () => {
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
        getState: () => ({
            users: {
                data: [4444444]
            }
         }),
      },
      getUsers,
      {
        forbidden: false
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
        forbidden: false
      }
    ).toPromise();

    expect(usersAuth.users.mock.calls.length).toBe(1);
    expect(dispatched).toContainEqual(Creators.getUsersFailure());
  });

  it('Should be able to failure if is forbidden', async () => {
    const dispatched = [];

    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
        getState: () => ({ state: 'test' }),
      },
      getUsers,
      {
        forbidden: true
      }
    ).toPromise();

    expect(dispatched).toContainEqual(Creators.getUsersFailure());
  });
});