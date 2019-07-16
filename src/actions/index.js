import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  const userIds = _.uniq(_.map(getState().posts, 'userId'));

  userIds.forEach(userId => dispatch(fetchUser(userId)));
};

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts');
  const { data } = response;

  dispatch({ type: 'FETCH_POSTS', payload: data });
};

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  const { data } = response;

  dispatch({ type: 'FETCH_USER', payload: data});
};

// export const fetchUser = id => dispatch => _fetchUser(id, dispatch);
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);
//   const { data } = response;

//   dispatch({ type: 'FETCH_USER', payload: data});
// });