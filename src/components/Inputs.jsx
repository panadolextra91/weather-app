import { LuCat } from "react-icons/lu";
import { BiCurrentLocation } from "react-icons/bi";
import { useState } from "react";

const Inputs = ({ setQuery, setUnits }) => {
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearchClick = () => {
    if (city.trim() !== '') setQuery({ q: city.trim() });
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      setLoading(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setQuery({ lat: latitude, lon: longitude });
          setLoading(false);
        },
        () => {
          alert("Unable to retrieve your location");
          setLoading(false);
        }
      );
    }
  };

  return (
    <div className="flex flex-col sm:flex-row justify-center my-5 text-white space-y-4 sm:space-y-0 sm:space-x-4">
      <div className="flex flex-row w-full sm:w-3/4 items-center justify-center space-x-4">
        <input
          aria-label="Search by city"
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearchClick()}
          type="text"
          placeholder="Search by city..."
          className="text-gray-500 text-xl font-light p-2 w-full shadow-xl capitalize placeholder:lowercase focus:outline-none rounded-3xl"
        />

        <LuCat
          size={30}
          aria-label="Search"
          className="cursor-pointer transition duration-300 ease-out hover:scale-125"
          onClick={handleSearchClick}
        />

        <BiCurrentLocation
          size={30}
          aria-label="Use current location"
          className={`cursor-pointer transition duration-300 ease-out ${loading ? 'animate-spin' : 'hover:scale-125'}`}
          onClick={handleLocationClick}
        />
      </div>

      <div className="flex flex-row w-full sm:w-1/4 items-center justify-center space-x-2">
        <button
          aria-label="Set units to Celsius"
          className="text-2xl font-medium transition duration-300 ease-out hover:scale-125"
          onClick={() => setUnits('metric')}
        >
          °C
        </button>
        <p className="text-2xl font-medium mx-1">|</p>
        <button
          aria-label="Set units to Fahrenheit"
          className="text-2xl font-medium transition duration-300 ease-out hover:scale-125"
          onClick={() => setUnits('imperial')}
        >
          °F
        </button>
      </div>
    </div>
  );
};

export default Inputs;
