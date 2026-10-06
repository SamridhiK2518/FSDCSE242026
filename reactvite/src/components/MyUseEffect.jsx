import React, { useEffect, useState } from 'react';

function MyUseEffect() {
  const [counter, setCounter] = useState(0);
  const [pointer, setPointer] = useState(100);

  function incrementCounter() {
    setCounter(counter + 10);
  }

  function decreasePointer(){
    setPointer(pointer-10);
  }

  useEffect(() => {
    // console.log('useEffect called');
    console.log("Counter=" +counter);
    console.log("Pointer=" +pointer);
  }, [pointer, counter]); // dependency array

  return (
    <div>
        <h2>Counter App</h2>
        <h1 style={{color: 'red'}}>Counter: {counter}</h1>
        <button onClick={incrementCounter}>Increment Counter</button>
        {/* line draw between counter and pointer app */}
        <hr style={{margin: '20px 0'}} />
        <h2>Pointer App</h2>
        <h1 style={{color: 'blue'}}>Pointer: {pointer}</h1>
        <button onClick={decreasePointer}>Decrease Pointer</button>
    </div>
  );
}

export default MyUseEffect;