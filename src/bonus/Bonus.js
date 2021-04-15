import { useState, useEffect } from 'react';

const Bonus = () => {
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const [letter, setNextLetter] = useState(0);

    const handleAssigneeOnClick = () => {

        setNextLetter(prev => {
            if (prev === letters.length - 1) {
                return 0;
            } else {
                return prev + 1;
            }
        });}

        return(
            <div>
                <h1>{letters[letter]}</h1>
                <button onClick={handleAssigneeOnClick}>NEXT LETTER</button>

            </div>
        );


}
    

export default Bonus;