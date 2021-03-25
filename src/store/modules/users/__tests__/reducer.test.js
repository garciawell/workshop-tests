import { Creators } from '../actions';
import usersReducer, { INITIAL_STATE } from '../reducer';



describe('Reducer Get Users', () => {
  it('GET_USERS', () => {
    const state = usersReducer(
      INITIAL_STATE,
      Creators.getUsers()
    );

    expect(state).toStrictEqual({
      ...INITIAL_STATE,
      loading: true
    });
  });
  it('GET_USERS_SUCCESS', () => {

    const mockResponse = [{
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

    const state = usersReducer(
      INITIAL_STATE,
      Creators.getUsersSuccess(mockResponse)
    );

    expect(state).toStrictEqual({
        loading: false,
        data: [{...mockResponse[0], garcia: "Wellington"}]
    });
  });
  
  it('GET_USERS_FAILURE', () => {
    const state = usersReducer(INITIAL_STATE, Creators.getUsersFailure());

    expect(state).toMatchObject({
        data: []
    });
  });
});



// it('INITIAL_STATE', () => {
//   const state = stateControl(INITIAL_STATE, 'INITIAL_STATE');
//   expect(state).toStrictEqual({
//     ...INITIAL_STATE,
//   });
// });
