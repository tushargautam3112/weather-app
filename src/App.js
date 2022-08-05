import SelectCity from "./components/SelectCity";
import Inputs from "./components/Inputs";
import DateAndTime from "./components/DateAndTime";
import Main from "./components/Main";
import Forecast from "./components/Forecast";
import getFormattedWeatherData from "./services/weatherService";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [query, setQuery] = useState({ q: "New Delhi" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const message = query.q ? query.q : "current location.";

      toast.info("Fetching weather for " + message);

      await getFormattedWeatherData({ ...query, units }).then((data) => {
        toast.success(
          `Found weather for ${data.name}, ${data.country}.`
        );

        setWeather(data);
      });
    };

    fetchWeather();
    // console.log(weather)
  }, [query, units]);

  const colorBackground = () => {

    const threshold = units === "metric" ? 25 : 75;
    if (!weather) return "from-white to-white";
    else{
      if(weather.details === 'Rain') return "from-gray-700 to-gray-700"
      else if(weather.details === 'Clouds') return "from-orange-800 to-gray-700"
      else if(weather.details === 'Drizzle') return "from-green-600 to-blue-500"
      else if(weather.details === 'Haze') return "from-rose-400 to-pink-900"
      else if(weather.details === 'Clear') {
        if (weather.temp <= threshold) return "from-green-500 to-blue-700";
        else return "from-orange-700 to-yellow-800"
      }
    else return "from-cyan-700 to-blue-700"
    }
  };

  return (
    <div
      className={`py-5 px-4 md:px-[10vw] bg-gradient-to-br h-fit ${colorBackground()}`}
    >
      <SelectCity setQuery={setQuery} />
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />

      {weather && (
        <div>
          <DateAndTime weather={weather} />
          <Main weather={weather} />

          <Forecast title="hourly forecast" items={weather.hourly} />
          <Forecast title="daily forecast" items={weather.daily} />
        </div>
      )}

      <ToastContainer autoClose={4000} theme="dark" newestOnTop={true} limit={2}/>
    </div>
  );
}

export default App;
