import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import config from '../config';
import { StoreContext } from '../context/StoreContext';

const PostPage = () => {
    console.log('posts');
    const { state, actions } = useContext(StoreContext);

    useEffect(() => {
        function getPosts() {
            axios.get(config.api.posts).then(res => {
                if (res.status === 200) {
                    actions.setPosts(res.data);
                }
            });
        }

        getPosts();
    }, [actions]);

    

    const postList = state.posts.map(post => {
        return (
            <li style={{padding: '16px', borderBottom: '1px solid #e4e4e4'}} key={`post_${post.id}`}>
                <p>
                    <Link to={`${config.paths.posts}/${post.id}`}>{post.title}</Link>
                </p>
                <p>{ post.body }</p>
            </li>
        );
    });

    return (
        <div>
            <h4>Posts</h4>
            <ul>
                {
                    postList.length > 0
                    ? postList
                    : (
                        <li>
                            List is empty
                        </li>
                    )
                }
            </ul>
        </div>
    );
};

export default PostPage;