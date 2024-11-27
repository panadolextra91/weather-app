import { LuCat } from "react-icons/lu";
import { BiCurrentLocation } from "react-icons/bi";
const Inputs = () => {
  return (
    <div className="flex flex-row justify-center my-5 text-white">
        <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
            <input type="text" placeholder="Search by city..." className="text-gray-500 text-xl font-light p-2 w-full shadow-xl capitalize placeholder:lowercase focus:outline-none rounded-3xl"/>

            <LuCat size={30} className="cursor-pointer transition duration-300 ease-out hover:scale-125"/>

            <BiCurrentLocation size={30} className="cursor-pointer transition duration-300 ease-out hover:scale-125"/>
        </div>

        <div className="flex flex-row w-1/4 items-center justify-center">
            <button className="text-2xl font-medium transition duration-300 ease-out hover:scale-125">
            °C
            </button>
            <p className="text-2xl font-medium mx-1">|</p>
            <button className="text-2xl font-medium transition duration-300 ease-out hover:scale-125">
            °F
            </button>
        </div>
    </div>
  )
}

export default Inputs;