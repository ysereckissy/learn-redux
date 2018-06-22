import React from 'react';

const Comment = props => {
    return (
    <div className="comment">
        <p>
            <strong>{props.comment.user}</strong>
            {props.comment.text}
            <button className="remove-comment" onClick={props.removeComment.bind(null,
            props.params.postId, props.ii)}>&times;</button>
        </p>
    </div>
    );
};

export default Comment;

