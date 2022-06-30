import { useState } from "react"


export const useCounter = (inicialValue = 1) => {

    const [counter, setCounter] = useState(inicialValue);

    const increment = (value=1) => setCounter(counter + value);

    const decrement = () => {
        if ( counter <= 0 ) return;
        setCounter(counter - 1)
    }

    const reset = () => setCounter(inicialValue);

    return {
        counter,
        increment,
        decrement,
        reset,
    }
}
