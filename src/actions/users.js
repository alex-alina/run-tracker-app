import request from 'superagent';
export const USERS_FETCHED = 'USERS_FETCHED';
export const USER_FETCHED = 'USER_FETCHED';

const baseUrl = 'http://localhost:4000';

const usersFetched = users => ({
  type: USERS_FETCHED,
  users
});

const userFetched = user => ({
  type: USER_FETCHED,
  user
});

export const loadUsers = () => (dispatch, getState) => {
  // when the state already contains users, we don't fetch them again
  if (getState().users) return;
  // a GET /users request
  request(`${baseUrl}/users`)
    .then(response => {
      // dispatch an USERS_FETCHED action that contains the users
      dispatch(usersFetched(response.body));
    })
    .catch(console.error);
};

export const loadUser = (userId) => dispatch => {
  request
    .get(`${baseUrl}/users/${userId}`)
    .then(response => {
      dispatch(userFetched(response.body));
    })
    .catch(console.error);
};
