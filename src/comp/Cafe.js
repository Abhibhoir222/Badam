import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
const Cafe =()=>{
const [cafe,setCafe] = useState(false);
useEffect(()=>{
    setCafe(true)
},[])
    return(
        <div class="container py-10 px-10 mx-0 min-w-full">
        <br />
        <p class="text-center text-pink-700">At what time are Meering? 😊</p>
        <div class="flex justify-center">
          <button onClick={()=>{setCafe(alert("you Ride is Ready Badam,Please Contact Abhishek "+" As Per you contact save"))}}  class="bg-purple-900 text-white hover:bg-blue-400 font-bold py-2 px-4 mt-3 rounded items-center">cafe 😉 </button>
        </div>
        <div class="flex justify-center">
          <button onClick={()=>{setCafe(alert("you Ride is Ready Badam,Please Contact Abhishek "+" As Per you contact save"))}}  class="bg-purple-900 text-white hover:bg-blue-400 font-bold py-2 px-4 mt-3 rounded items-center">ABCD 🧃  </button>
        </div>
      </div>
    )
    
}

export default Cafe;

