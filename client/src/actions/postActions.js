import axios from 'axios';

import {
    ADD_POST,
    GET_ERRORS,
    GET_POST,
    GET_POSTS,
    POST_LOADING,
    DELETE_POST


} from './types';

// add Post

export const addPost = postData => dispatch => {
    axios
    .post('/api/posts', postData)
    .then(res =>  
        dispatch({
            type: ADD_POST,
            payload: res.data
        })
        )
        .catch(err => 
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
            );
};

//Get posts

export const getPosts = () => dispatch => {
    dispatch(setPostLoading());
    axios
    .get('/api/posts')
    .then(res =>  
        dispatch({
            type: GET_POSTS,
            payload: res.data
        })
        )
        .catch(err => 
            dispatch({
                type: GET_POSTS,
                payload: null
            })
            );
};

//get Post
export const getPost = id => dispatch => {
    dispatch(setPostLoading());
    axios
    .get(`/api/posts/${id}`)
    .then(res =>
        dispatch({
            type: GET_POST,
            payload: res.data
        })
        )
        .catch(err => 
            dispatch({
                type: GET_POST,
                payload: null
            })
            );
};

//set loading state

export const setPostLoading = () => {
    return {
        type: POST_LOADING
    };
};

//delete post

export const deletePost = id => dispatch => {
    axios
      .delete(`/api/posts/${id}`)
      .then(res =>
        dispatch({
          type: DELETE_POST,
          payload: id
        })
      )
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
  };