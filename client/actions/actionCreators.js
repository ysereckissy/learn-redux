import ACTION from './actions'

export const increment = id => {
    return {
        type: ACTION.INCREMENT_LIKES,
        id
    };
};

export const addComment = (postId, author, comment) => {
    return {
        type: ACTION.ADD_COMMENT,
        postId,
        author,
        comment
    };
};

export const removeComment = (postId, index) => {
    return {
        type: ACTION.REMOVE_COMMENT,
        index,
        postId
   };
};


