import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const CREATE_POST = 'CREATE_POST';
export const DELETE_POST = 'DELETE_POST';
const rootUrl = 'http://reduxblog.herokuapp.com/api';
const apiKey = '?key=willarendsdev';

export function fetchPosts() {
  const request = axios.get(`${rootUrl}/posts${apiKey}`);
  return {
      type:FETCH_POSTS,
      payload: request
  }
}


export function createPost(props){
  const request = axios.post(`${rootUrl}/posts/${apiKey}`, props);
  return {
    type: CREATE_POST,
    payload: request
  }
}

export function getPost(id){
  const request = axios.get(`${rootUrl}/posts/${id}${apiKey}`);
  return {
    type: FETCH_POST,
    payload: request
  }
}

export function deletePost(id){
  const request = axios.delete(`${rootUrl}/posts/${id}${apiKey}`);
  return {
    type: DELETE_POST,
    payload: request
  }
}
