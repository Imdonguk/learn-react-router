import React from 'react';

const Post = ({ location, match }) => {
    return (
        <div>
            <h2>포스트!! {match.params.id}</h2>
            <p>location.pathname : {location.pathname}</p>
            <p>match.path : {match.path}</p>
            <p>match.url : {match.url}</p>
        </div>
    );
};

export default Post;