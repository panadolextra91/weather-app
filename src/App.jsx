import { LuCat } from "react-icons/lu";
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from "./components/TimeAndLocation";
import TempAndDetails from "./components/TempAndDetails";
const App = () => {
  return (
    <div className="max-w-screen-lg my-5 mx-auto py-5 px-32 bg-gradient-to-br shadow-xl shadow-gray-400 from-cyan-600 to-blue-600">
      <TopButtons/>
      <Inputs/>
      <TimeAndLocation/>
      <TempAndDetails/>
    </div>
  )
};

export default App;