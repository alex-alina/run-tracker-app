import request from 'superagent';
export const USERS_FETCHED = 'USERS_FETCHED';
export const USER_FETCHED = 'USER_FETCHED';

const baseUrl = 'http://localhost:4000';

const usersFetched = users => ({
  type: USERS_FETCHED,
  users
});

const userFetched = userId => ({
  type: USER_FETCHED,
  userId
});

export const loadUsers = () => (dispatch, getState) => {
  // when the state already contains users, we don't fetch them again
  if (getState().users) return;
  request(`${baseUrl}/users`)
    .then(response => {
      dispatch(usersFetched(response.body));
    })
    .catch(console.error);
};

export const loadUser = (userId) => dispatch => {
  dispatch(loadUsers());
  dispatch(userFetched(userId));
  // request
  //   .get(`${baseUrl}/users/${userId}`)
  //   .then(response => {
  //     dispatch(userFetched(response.body.id));
  //   })
  //   .catch(console.error);
};
