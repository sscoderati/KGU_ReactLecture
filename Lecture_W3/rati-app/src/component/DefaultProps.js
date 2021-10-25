import React from 'react';

const DefaultProps = ({name, age, job}) => {
    return (
        <>
            <h1>여러가지 프롭스사용</h1>
            <p>My name is {name}</p>
            <p>I am {age} years old</p>
            <p>My job is {job}</p>
        </>
    );
};

export default DefaultProps;

DefaultProps.defaultProps = {
    name: "이름없음",
    age: "정보없음",
    job: "무직"
}