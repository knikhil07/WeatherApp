import React, { useContext } from "react";
import AppContext from "../context/AppContext";

const Navbar = () => {
  const {city, setCity,weather}=useContext(AppContext);
  return (
    <div className="py-4 w-full grid place-items-center md:place-items-start">
     
      <div className="flex gap-3 md:ml-12">
        <div className="px-6 py-2 bg-slate-700 rounded-xl">
          <input
            type="search"
            value={city}
            onChange={(e)=>{setCity(e.target.value)}}
            className="bg-transparent outline-none placeholder:text-slate-300 text-slate-300 font-semibold w-56 md:w-72 lg:w-96"
            placeholder="Enter cities"
          />
        </div>
        <button onClick={()=>{weather(city)}}  className="px-4 py-1 text-md bg-slate-300 rounded-xl">
          Search
        </button>
      </div>
    </div>
  );
};

export default Navbar;
