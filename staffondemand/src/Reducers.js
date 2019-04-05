import { SET_CURRENT_USER, SET_STAFF,SET_START_TIME,SET_END_TIME,SET_ACTIVITY_PACK } from './types';
import isEmpty from 'lodash/isEmpty';

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case SET_CURRENT_USER:
      return {
        isAuthenticated: !isEmpty(action.user),
        user: action.user,
        
      };
      case SET_STAFF:
      return {
        ...state,
        namestaff:action.name,
        staffemail:action.email
        
      };

      case SET_START_TIME:
      return {
        ...state,
        starttime:action.starttime,
      };

      case SET_END_TIME:
      return {
        ...state,
        endtime:action.endtime
     
      };
      case SET_ACTIVITY_PACK:
      return {
        ...state,
        activitypack: action.activitypack
        
      };
    default: return state;
  }
}


