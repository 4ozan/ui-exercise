import React, { useState } from 'react';

function myGreet () {
    console.log("Function called");
    return "hello"
}

const [count , setCount ] = useState(0);
const [greeting] = useState(() => myGreet()) 