// BONUS

// { useState } is a function or a hook used to import this property from 'react' feature
import { useState } from 'react';


const Bonus = () => {
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const [letter, setNextLetter] = useState(0);

    const nextLetter = () => {

        setNextLetter(letter => {
            if (letter === letters.length - 1) {
                return 0;
            } else {
                return letter + 1;
            }
        });}

        return(
            <div>
                <h1>{letters[letter]}</h1>
                <button onClick={nextLetter}>NEXT LETTER</button>

            </div>
        );
}


// ALSO --- With Ternary

   
// const Bonus = () => {
//     const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

//     const [letter, setLetter] = useState(0);

//     return(
//         <div>
//         {/* Using [letters array, plugging in an index, to give certain letter from 'letters' array] */}
//             <h1>{letters[letter]}</h1>
//         {/* {letters[0] = A */}
//         {/* onClick= will run anonymous arrow function, using letter[0], is less than  letters.length - 1, it will setLetter(letter + 1).... if letters is not less than  (letters.length - 1) , it will setLetter back to 0(*/}
//             <button onClick={() => letter < (letters.length - 1) ? setLetter(letter + 1) : setLetter(0)}>NEXT LETTER</button>
//         </div>
//     );

// }


export default Bonus;