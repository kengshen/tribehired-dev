const initialState = {
    posts: [],
}

const types = {
    SET_POSTS: 'SET_POSTS',
}

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_POSTS:
            return {
                ...state,
                posts: action.payload
            };

        default:
            throw new Error('Unexpected action');
    }
};

export {
    initialState,
    types,
    reducers
}