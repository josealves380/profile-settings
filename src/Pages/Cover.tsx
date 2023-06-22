import { LogoRocketseat } from "../components/logoRocketeseat";
import { BoraCodar } from "../components/boraCodar";
import { Profile } from "../components/profile";
import { useState } from "react";

export function Cover() {
  const [darkToggle, setDarkToggle] = useState(false);
  return (
    <div
      className={`w-screen h-screen ${
        darkToggle == true ? "bg-white text-black-500" : "bg-gray"
      } ${darkToggle == false ? "bg-black-700 text-black-700" : "text-white"}`}
    >
      <div className="flex flex-col-2 justify-between items-start w-screen">
        <div className="mt-16 ml-32">
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" onClick={() => setDarkToggle(!darkToggle)} value="" className="sr-only peer" checked />
            <div className="w-11 h-6 mb-8 bg-red rounded-full peer peer-focus:ring-4 peer-focus:ring-black-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>          
          <span className="mt-32">
            <LogoRocketseat />
          </span>
          <div
            className={`flex flex-col ${
              darkToggle == true ? "text-black-500" : ""
            } ${
              darkToggle == false ? " text-white" : ""
            } text-4xl font-bold mt-16 border-none`}
          >
            <span> Profile</span>
            <span>Settings</span>
          </div>
          <div className="mt-16">
            <h3
              className={` text-opacity-10 m-2 text-2xl ${
                darkToggle == true ? "" : "text-black-500"
              } ${darkToggle == false ? "text-white" : ""} font-extralight`}
            >
              Desafio 22
            </h3>
          </div>

          <button className="bg-black-500 rounded-3xl px-3 py-3 mt-16 mb-16">
            <BoraCodar />
          </button>
        </div>
        <div className="flex static justify-end  inset-0 inset-y-0">
          <div className="absolute mt-32 mr-48 z-10 mb-0">
            <Profile />
          </div>

          <span className={`z-1 ${darkToggle == false ? "bg-purple-600":"bg-black-700" } w-[380px] h-[600px] flex items-stretch justify-self-end`}></span>
        </div>
      </div>
     
    </div>
  );
}
