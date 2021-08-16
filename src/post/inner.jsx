import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import config from '../config';
import CommentList from './comments/list';

const PostInnerPage = () => {
    console.log('post inner');
    const { pid } = useParams();
    const history = useHistory();

    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    // const [filterBy, setFilterBy] = useState('name');
    const [filterValue, setFilterValue] = useState('');

    useEffect(() => {
        if (pid === undefined) {
            history.goBack();
            return;
        }
        getPost(pid);
        getComments(pid);
    }, [history, pid]);

    function getPost(postId) {
        axios.get(`${config.api.posts}/${postId}`).then(res => {
            if (res.status === 200) {
                setPost(res.data);
            }
        });
    }

    function getComments(postId) {
        axios.get(config.api.comments, {
            params: {
                postId: postId
            }
        }).then(res => {
            console.log(res);
            if (res.status === 200) {
                setComments(res.data);
            }
        });
    }

    function filteredComments() {
        if (filterValue === '') {
            return comments;
        }

        // return comments.filter(comment => comment[filterBy].includes(filterValue))
        return comments.filter(comment => {
            return comment.name.includes(filterValue) || comment.email.includes(filterValue) || comment.body.includes(filterValue);
        });
    }

    return (
        <div>
            <h4>Post inner</h4>
            <p>Title: {post.title || ''}</p>
            <p>Body: {post.body || ''}</p>
            <p>User ID: {post.userId || ''}</p>
            <h4>
                Comments
                {/* <label style={{marginLeft: '8px'}}>
                    Filter by
                </label>
                <select value={filterBy} onChange={e => setFilterBy(e.target.value)}>
                    <option value="name">Name</option>
                    <option value="email">Email</option>
                    <option value="body">Body</option>
                </select> */}
                <input style={{marginLeft: '8px'}} onChange={e => setFilterValue(e.target.value)} type="text" value={filterValue} />
            </h4>
            <CommentList 
                comments={filteredComments()}
            />
        </div>
    );
};

export default PostInnerPage;