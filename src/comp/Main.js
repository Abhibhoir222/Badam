
import {Link} from 'react-router-dom'
 
const Mian =()=>{
    return(
        <div class="container py-10 px-10 mx-0 min-w-full flex-col just m-11  ">
        <br />
        <p class="text-center text-pink-700">So 😁, what is your plan for today 😊</p>
        <div class="flex justify-center flex-col">
        <Link to='/cafe'>
        <div>
          <button class="bg-purple-900 text-white hover:bg-blue-400 font-bold py-2 px-4 mt-3 rounded items-center">Bhetacha? </button>
          </div>
          </Link>
          <Link to='/badamanser'>
          <div>
          <button class="bg-purple-900 text-white hover:bg-blue-400 font-bold py-2 px-4 mt-3 rounded items-center">Bghu 😒 As per Badam 🤕</button>
          </div>
          </Link>
        </div>
      </div>
    )
}

export default Mian;

