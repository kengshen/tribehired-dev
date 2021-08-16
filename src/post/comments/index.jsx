import React from 'react';

const Comment = (props) => {
    return (
        <li style={{borderBottom: '1px solid #e4e4e4'}}>
            <p>Name: {props.name}</p>
            <p>Email: {props.email}</p>
            <p>Body: {props.body}</p>
        </li>
    );
};

export default Comment;