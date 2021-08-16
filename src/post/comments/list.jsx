import React from 'react';
import Comment from './index';

const CommentList = (props) => {
    const comments = props.comments || [];
    const commentList = comments.map(comment => {
        return (
            <Comment
                key={`comment_${comment.id}`}
                name={comment.name}
                email={comment.email}
                body={comment.body}
            />
        );
    });
    return (
        <ul>
            {
                commentList.length > 0
                ? commentList
                : (
                    <li>Comment is empty</li>
                )
            }
        </ul>
    );
};

export default CommentList;