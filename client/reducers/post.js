import ACTION from '../actions/actions';

const post = (state = {}, action) => {
    switch(action.type) {
        case ACTION.INCREMENT_LIKES:
            return (state.id !== action.id) ?
            state :
            {
                ...state,
                likes: state.likes + 1

            };
        default:
            return state;
    }
};
export default post;
