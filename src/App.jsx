import React, { useEffect, useState } from "react";
import Home from "./Home";
import AppContext from "./context/AppContext";

const App = () => {
  const [Data, setData] = useState([
    {
      temp: "30",
      name: "India",
      windSpeed: "30",
      humidity: "45",
      img: "",
      pressure: "100",
      sunset: "6:30 pm",
      sunrise:"5:40 am"
    },
  ]);

  const [city, setCity] = useState();
  const [time, setTime] = useState("");
  const [img, setImg] = useState(`src\assets\weather02-512-removebg-preview.png`);



  const weather = async (city) => {
    try {
      console.log(import.meta.env.Vite_Apx);
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_API_ID}`;
      const response = await fetch(url).then((response) => response.json());

      const timestamp = response.dt; 
      const date = new Date(timestamp * 1000); 
      const formattedDate = date.toUTCString();
      setTime(formattedDate);
     
      const sunsetS=response.sys.sunset;
      const sunsetD = new Date( sunsetS * 1000);
      let sunsetT = sunsetD.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });

      const sunriseR = response.sys.sunrise;
      const sunriseD = new Date(sunriseR * 1000);
      let sunriseT = sunriseD.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });

      setData([
        {
          temp: Math.floor(response.main.temp),
          name: response.name,
          humidity: response.main.humidity,
          windSpeed: response.wind.speed,
          img: response.weather[0].icon,
          pressure: response.main.pressure,
          sunset: sunsetT,
          sunrise: sunriseT,
        },
      ]);

     
    
      setImg(`https://openweathermap.org/img/wn/${Data[0].img}@4x.png`);
    } catch (error) {
      console.log(error);
    }
  };
  const WeatherDays = async (city) => {
    try {
      const url =`https://pro.openweathermap.org/data/2.5/forecast/climate?q=London&appid=${import.meta.env.VITE_API_ID}`;
      const response = await fetch(url).then(response =>response.json())
      console.log(response);
    } catch (error) {
      
    }
  }
  useEffect(() => {
    weather("secunderabad");
    WeatherDays("secunderabad");
  }, []);

  const values = { Data, img, time, city, setCity, weather };
  return (
    <AppContext.Provider value={values}>
      <Home />
    </AppContext.Provider>
  );
};

export default App;
