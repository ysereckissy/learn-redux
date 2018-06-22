import ACTION from '../actions/actions';
import post from './post'

const posts = (state = [], action) => {
    switch(action.type) {
        case ACTION.INCREMENT_LIKES:
            return state.map(p => post(p, action));
        default:
            return state;
    }
};

export default posts;

