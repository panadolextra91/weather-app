import { LuCat } from "react-icons/lu";
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from "./components/TimeAndLocation";
import TempAndDetails from "./components/TempAndDetails";
import Forecast from "./components/Forecast";
import getWeatherData from "./services/weatherService";
import getFormattedWeatherData from "./services/weatherService";
import { useEffect, useState } from "react";
//clear night https://cdn.pixabay.com/animation/2023/03/19/02/34/02-34-11-741_512.gif
//cloud night https://media.tenor.com/Hgv66cmtGDgAAAAM/clouds-night.gif
//rain night https://media.tenor.com/images/29802d23654b845969a62105b6d5b14e/tenor.gif
//clear day https://www.icegif.com/wp-content/uploads/2022/08/icegif-963.gif
//cloud day https://media.tenor.com/tM1VMb-dA44AAAAM/mood-aesthetic.gif
//rain day https://theapopkavoice.com/uploads/original/20230712-183836-header_raining.gif
const App = () => {

  const [query, setQuery] = useState({q: 'my tho'})
  const [units, setUnits] = useState('metric')
  const [weather, setWeather] = useState(null)

  const getWeather = async () => {
    await getFormattedWeatherData({ ...query, units }).then((data => {
      setWeather(data);
    }));
    console.log(data);
  };

  useEffect(() => {
    getWeather();
  }, [query, units]);

  /*const formatBg = () => {
    if (!weather) return 'from-cyan-600 to-blue-600';
    const threshold = units === 'metric' ? 20 : 60;
    if (weather.temp <= threshold) return "bg-[url(https://media.tenor.com/images/29802d23654b845969a62105b6d5b14e/tenor.gif)] bg-cover bg-center";
    return "from-yellow-600 to-orange-600"
  }*/

    const formatBg = () => {
      if (!weather) return 'from-cyan-600 to-blue-600'; // Default gradient background
    
      // Calculate the current hour based on local time
      const currentHour = new Date((weather.dt + weather.timezone) * 1000).getUTCHours();
    
      // Determine if it's night or day
      const isNight = currentHour >= 17 || currentHour < 5;
    
      if (isNight) {
        switch (weather.details) {
          case 'Clear':
            return "bg-gradient-to-br from-purple-950 to-black";
          case 'Clouds':
            return "bg-gradient-to-br from-[#038aa8] to-black";
          case 'Rain':
            return "bg-gradient-to-b from-black via-slate-700 to-slate-400";
          default:
            return 'from-yellow-600 to-orange-600'; // Fallback gradient for night
        }
      } else {
        switch (weather.details) {
          case 'Clear':
            return "bg-gradient-to-bl from-yellow-300 to-blue-500 via-blue-400";
          case 'Clouds':
            return "bg-gradient-to-b from-teal-700 via-teal-200 to-yellow-200";
          case 'Rain':
            return "bg-gradient-to-b from-blue-950 to-slate-600";
          default:
            return 'from-cyan-600 to-blue-600'; // Fallback gradient for day
        }
      }
    };
    

  return (
    <div className={`max-w-screen-lg rounded-xl my-5 mx-auto pt-3 pb-10 px-28 bg-gradient-to-br shadow-xl shadow-gray-400 ${formatBg()}`}>
      <div className="bg-slate-400/30 px-10 rounded-xl backdrop-blur-sm">
      <TopButtons setQuery={setQuery}/>
      <Inputs setQuery={setQuery} setUnits={setUnits}/>

      {
        weather && (
          <>
          <TimeAndLocation weather = {weather}/>
          <TempAndDetails weather = {weather} units = {units}/>
          <Forecast title = '3-hour step forecast' data = {weather.hourly}/>
          <Forecast title = 'daily forecast' data = {weather.daily}/>
          </>
        )
      }
      </div>
      
    </div>
  )
};

export default App;