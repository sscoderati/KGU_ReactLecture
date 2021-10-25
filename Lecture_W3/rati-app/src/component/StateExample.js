import React, { useState } from 'react';

const StateExample = (props) => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        // setCount((preVal) => preVal + 1);
        // setCount(count + 1);
        count = 3;
    };
    return (
        <>
            <h2>count is {count}</h2>
            <button onClick={handleClick}>+</button>
        </>
    );
};

export default StateExample;