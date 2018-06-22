import React from 'react';
import Photo from './Photo';
import ConstComments from './ConstComments';

const Single = props => {
    const ii = props.posts.findIndex(post => post.code === props.params.postId);
    const post = props.posts[ii];
    const comments = props.comments[props.params.postId] || [];
    return (
        <div className="single-photo">
            <Photo post={post} {...props}/>
            <ConstComments comments={comments} {...props} />
        </div>
    );
};
export default Single;

