import ACTION from '../actions/actions';

const comment = (state = {}, action) => {
    switch(action.type) {
        case ACTION.ADD_COMMENT:
            return {
                user: action.author || "anonymous",
                text: action.comment
            };
        default:
            return state;
    }
};
export default comment;

