import React, { useContext } from "react";
import Navbar from "./componets/Navbar";
import AppContext from "./context/AppContext";

const Home = () => {
    const {Data,img,time,e}=useContext(AppContext);
    return (
        <>
            <div className="h-screen w-screen flex items-start justify-start flex-col bg-gray-800">
             <Navbar/>
             <div className="mt-6  h-auto w-full flex flex-col items-center">
               <div className="min-h-96 w-[90%] sm:w-[80%] bg-white/5 rounded-lg">
                   <div className="w-full px-2 md:px-4 py-4 flex items-center justify-between">
                        <div className="flex flex-col gap-1 min-h-36 px-6">
                            <h2 className="font-bold text-2xl  text-slate-100">{Data[0].name}</h2>  
                            <span  className="text-slate-400 text-xs md:text-base" >Chance of rain : 0%</span>
                            <h6 className="text-slate-100 text-xs md:text-base">{time}</h6>
                            <div className="flex gap-3 text-slate-300">
                                <div className="text-xs md:text-base"><b>sunrise :</b> {Data[0].sunrise} </div>
                                <div className="text-xs md:text-base"><b>sunset :</b> {Data[0].sunset}</div>
                            </div>
                            <div className="text-7xl md:text-8xl text-slate-100 mt-10">
                                {Data[0].temp}°C
                            </div>
                        </div>
                        <div className="h-36 " >
                                <img src={img}alt="" className="h-36 md:h-56  " />
                        </div>
                   </div>
                   <div className="flex gap-12 w-[90%] sm:w-[80%] h-10 px-10 mt-4">
                    <div className="flex gap-3 items-center">
                        <img src="src\assets\1622158.png" className="w-10 text-sky-500" alt="" />
                        <div className="flex flex-col  text-slate-400 font-bold">
                        <p className="text-slate-100">Humidity</p>
                        <p>{Data[0].humidity}</p>
                    </div>
                    </div>
                    <div className="flex gap-3 items-center">
                        <img src="src\assets\istockphoto-1368763816-612x612-removebg-preview.png" className="w-10 " alt="" />
                        <div className="flex flex-col  text-slate-400 font-bold">
                        <p className="text-slate-100">WindSpeed</p>
                        <p>{Data[0].windSpeed} Km/h</p>
                    </div>
                    </div>
                    <div className="flex gap-3 items-center">
                        <img src="src\assets\istockphoto-1368763816-612x612-removebg-preview.png" className="w-10 " alt="" />
                        <div className="flex flex-col  text-slate-400 font-bold">
                        <p className="text-slate-100">Pressure</p>
                        <p>{Data[0].pressure} Pa </p>
                    </div>
                    </div>
                   </div>
               </div>
               <div className="h-auto w-[90%] sm:w-[80%] flex  flex-wrap gap-6"></div>
             </div>
            </div>
        </>
    );
};

export default Home;
