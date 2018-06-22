import React from 'react';
import Comment from './Comment';

class Comments extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const {postId} = this.props.params;
        const author = this.refs.author.value;
        const comment = this.refs.comment.value;
        this.props.addComment(postId, author, comment);
        this.refs.commentForm.reset();
        this.refs.author.focus();
    }

    render() {
        const comments = this.props.comments[this.props.params.postId] || [];
        return (
            <div className="comments">
                {comments.map((comment, ii) => <Comment key={ii} ii={ii} comment={comment}
                {...this.props}/>)}
                <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
                   <input type="text" ref="author" placeholder="author" />
                   <input type="text" ref="comment" placeholder="comment" />
                   <input type="submit" hidden />
                </form>
            </div>
        );
    }
};
export default Comments;

