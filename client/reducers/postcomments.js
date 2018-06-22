import ACTION from '../actions/actions';
import comment from './comment';

const postcomments = (state = [], action) => {
    switch(action.type) {
        case ACTION.ADD_COMMENT:
            return [
                ...state,
                comment({}, action)
            ];
        case ACTION.REMOVE_COMMENT:
            return state.filter((cmnt, index) => action.index !== index);
        default:
            return state;
    }
};

export default postcomments;
