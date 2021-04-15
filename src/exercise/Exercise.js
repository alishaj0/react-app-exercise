import { useState } from 'react';

const Exercise = ({ good = "Awesome", bad = "Terrible" }) => {
    const [num, setNum] = useState(1);
    const addNum = () => setNum(num + 1);

    return (
        <div>
            <h1>{good}</h1>
            <h1>{bad}</h1>

            <button onClick={() => alert('Congrats! You have clicked the button.')}>CLICK HERE</button>

            <button onClick={addNum}>STATE</button>
            <h1>{num}</h1>
        </div>
    );
}

export default Exercise;





