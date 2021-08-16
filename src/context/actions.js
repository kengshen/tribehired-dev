import { types } from './reducers';

export const useActions = (state, dispatch) => {
    
    function setPosts(posts) {
        dispatch({
            type: types.SET_POSTS,
            payload: posts
        });
    }

    return {
        setPosts,
    }
}
