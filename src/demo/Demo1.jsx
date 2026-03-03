import React, { useState } from 'react'

export default function Demo1()   
{
    //count is state variable and setCount is a method to modify the count value 
   const [count,setCount] = useState(0)

     function increment()
     {
       //alert("increment")
       setCount(count+1)
     }
     function decrement()
     {
      //alert("decrement")
      setCount(count-1)
     }
    return (
    <div>
        <h2>Counter App</h2>
    COUNT={count}
    <button onClick={increment}>increment</button><br/>
    <button onClick={decrement}>decrement</button>
    </div>
    )
}