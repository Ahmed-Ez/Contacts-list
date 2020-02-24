import React, { useReducer } from 'react';
import axious from 'axios'
import AuthContext from './authContext';
import authReducer from './authReducer';

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS
} from '../types';

const AuthState = props => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    user: null,
    loading: true,
    error: null
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  //LOAD USER

  //REGISTER_USER
  const register = async formData =>{

    const config = {
      headers:{
        'Content-Type':'application/json'
      }
    };

    try{
      const res = await axious.post('/api/users',formData,config);
      dispatch({
        type:REGISTER_SUCCESS,
        payload:res.data
      });
    }catch(err){
      dispatch({
        type:REGISTER_FAIL,
        payload:err.response.data.msg
      });
    }
  }

  //LOGIN_USER

  //LOGOUT

  //CLEARERRORS
  const clearErrors=()=> dispatch({type:CLEAR_ERRORS});

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
        register,
        clearErrors
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
