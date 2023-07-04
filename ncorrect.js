//incorrect

import React, { useState, useEffect } from "react";

const MyComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component mounted!");

    setCount(count + 1);

    useEffect(() => {
      console.log("Inner useEffect");
    });

    useEffect(() => {
      console.log("useEffect with incorrect dependency");
    }, [count]);

    if (count > 0) {
      useEffect(() => {
        console.log("useEffect with conditional");
      });
    }

    useEffect(() => {
      console.log("useEffect with missing cleanup");
    });

    useEffect(() => {
      console.log("useEffect with improper cleanup");
      return count;
    });

    setCount(count + 1);
    useEffect(() => {
      console.log("useEffect with incorrect placement");
    });

    useEffect(() => {
      console.log("useEffect with invalid dependency type");
    }, [null]);

    useEffect(async () => {
      console.log("useEffect with async function");
    }, [count]);

    useEffect(() => {
      console.log("First useEffect");
    }, [count]);

    useEffect(() => {
      console.log("Second useEffect");
    }, [count]);

    return (
      <div>
        <h1>{count}</h1>
      </div>
    );
  }, [count]); 

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default MyComponent;
