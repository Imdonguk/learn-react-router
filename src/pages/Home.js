import React from 'react';

const Home = ({ history }) => {
    return (
        <div>
            <h2>HOME</h2>
            <button onClick={() => { history.push('/about') }}>클릭하면 About으로 이동</button><br />
            <button onClick={() => { history.push('/posts') }}>클릭하면 포스트로 이동</button><br />
            <button onClick={() => { history.push('/me') }}>클릭하면 마이페이지로 이동</button><br />
            <button onClick={() => { history.push('/login') }}>클릭하면 로그인페이지 이동</button><br />
        </div>
    );
};

export default Home;