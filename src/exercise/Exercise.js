// REACT APP EXERCISE

import { useState } from 'react';

const Exercise = ({ good = "Great", bad = "Not Great" }) => {

    const [num, setNum] = useState(1);
        // useState(1) for num
    const addNum = () => setNum(num + 1);
        // addNum = arrow function to 'setNum' (which is num + 1)

    return (
        <div>
            <h1>{good}</h1>
            <h1>{bad}</h1>

            <button onClick={() => alert('Congrats! You have clicked the button.')}>CLICK HERE</button>

            <button onClick={addNum}>STATE</button>
                {/* Each 'onClick' = addNum */}
            <h1>{num}</h1>
                {/* display num */}
        </div>
    );
}

export default Exercise;





