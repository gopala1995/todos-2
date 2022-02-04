import { useEffect, useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
  const id =  setInterval(() => {
      setCounter((prev)=>{
          console.log(prev);
         if(prev === 100){
         clearInterval(id)
            return 100
         }else
            return  prev + 1
        });
    }, 100);
    return ()=>{
        clearInterval(id)
    }
  }, []);

  return (
    <div>
      <h1>Counter:{counter}</h1>
      {/* <button onClick={()=>{
           setCounter(counter+1)
       }}>button</button> */}
    </div>
  );
};
