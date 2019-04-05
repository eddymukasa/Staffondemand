// The middleware to call the API for quotes
import axios from 'axios';
import setAuthorizationToken from './Utils/setAuthorizationToken';
import jwtDecode from 'jwt-decode';
import { SET_CURRENT_USER, SET_STAFF, SET_START_TIME,SET_END_TIME,SET_ACTIVITY_PACK } from './types';




// new auth implementation
export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  };
}

export function setStaff(name, email) {
  return {
    type: SET_STAFF,
    name,
    email
  };
}

export function setStartTime(starttime) {
  return {
    type: SET_START_TIME,
    starttime
  };
}

export function setEndTime( endtime) {
  return {
    type: SET_END_TIME,
    endtime
  };
}

export function setActivityPack(activitypack) {
  return {
    type: SET_ACTIVITY_PACK,
    activitypack
  };
}
export function login(data) {
  
  return dispatch => {
    return axios.post('http://localhost:8080/login', {email:data.email,password: data.password}).then(res => {
      const token = res.headers.authorization;
     // console.log("token: ",token);
      localStorage.setItem('jwtToken', token);
      setAuthorizationToken(token);
     // console.log("token: ",jwtDecode(token));
      dispatch(setCurrentUser(jwtDecode(token)));
    });
  }
}

export function logout() {
  return dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  }
}

export function signup(data) {
  
  return dispatch => {
    return axios.post('http://localhost:8080/sign-up', {data}).then(res => {
      
    },
    err =>{
      
    });
  }
}

export function setstaff(namestaff, email) {
  console.log("email "+email)
  return   dispatch => {
    dispatch(setStaff(namestaff, email))
  }
}

export function setstarttime(starttime) {
  return   dispatch => {
    dispatch(setStartTime(starttime))
  }
}

export function setendtime( endtime) {
  return   dispatch => {
    dispatch(setEndTime(endtime))
  }
}

export function setactivitypack(activitypack) {
  return   dispatch => {
    console.log("activitypack "+activitypack)
    dispatch(setActivityPack(activitypack))
  }
}


