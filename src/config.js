const baseAPIUrl = 'https://jsonplaceholder.typicode.com';

const paths = {
    home: '/',
    posts: '/posts',
};

const api = {
    posts: `${baseAPIUrl}/posts`,
    comments: `${baseAPIUrl}/comments`,
};

const config = {
    api,
    paths,
};

export default config;