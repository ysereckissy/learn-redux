import ACTION from '../actions/actions';
import postcomments from './postcomments';

const comments = (state = {}, action) => {
    const id = action.postId;
    let newstate = {
         ...state,
      };
    switch(action.type) {
        case ACTION.ADD_COMMENT:
            newstate[id] = postcomments(state[id], action);
          return newstate;
        case ACTION.REMOVE_COMMENT:
            newstate[id] = postcomments(state[id], action);
            return newstate;
        default:
            return state;
    }
};

export default comments;

