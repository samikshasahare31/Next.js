
"use client";

import { useState } from "react";

export const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <button
            className="bg-pink-400 text-black p-5"
            onClick={() => setCount(count + 1)}
        >
            Add - {count}
        </button>
    );
};
 

// import { useState } from "react";

// export const Counter = () => {
//     const [inc, setInc] = useState(0);
//     return <button className="bg-pink-400 text-black p-5" onClick={(prev) => setInc(prev + 1)}>Add - {inc}</button>
// };
