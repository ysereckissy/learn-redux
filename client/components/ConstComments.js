import React from 'react';
import Comment from './Comment';

const ConstComments = props => {

    let _author, _comment;

    const handleSubmit = e => {
        e.preventDefault();
        props.addComment(props.params.postId, _author.value, _comment.value);
        _author.value = '';
        _comment.value = '';
        _author.focus();
    }

    const comments = props.comments[props.params.postId] || [];
     return (
        <div className="comments">
            {comments.map((comment, ii) => <Comment key={ii} ii={ii} comment={comment}
            {...props}/>)}
            <form className="comment-form" onSubmit={handleSubmit}>
               <input ref={input => _author = input}
                      type="text" 
                      placeholder="author" />
               <input ref={input => _comment = input} 
                      type="text" 
                      placeholder="comment" />
               <input type="submit" hidden />
            </form>
        </div>
    );
};
export default ConstComments;

