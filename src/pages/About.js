import React from 'react';
import queryString from 'query-string';

const About = ({ location, match }) => {
    const query = queryString.parse(location.search);
    const detail = query.detail;

    return (
        <div>
            <h2>About {match.params.name}</h2>
            {detail && '쿼리 detail이 true일 때만 렌더링'}
        </div>
    );
};

export default About;