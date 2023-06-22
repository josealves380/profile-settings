import { LogoRocketseat } from "../components/logoRocketeseat";
import { BoraCodar } from "../components/boraCodar";
import { Profile } from "../components/profile";

export function Cover() {
  return (
    <div className="w-screen h-screen bg-black-700">
      <div className="flex flex-col-2 justify-around items-start w-screen">
        <div className="mt-32">
          <span className="mt-32">
            <LogoRocketseat />
          </span>
          <div className="flex flex-col text-white text-4xl font-bold mt-16">
           <span > Profile</span>  
           <span >Settings</span>
          </div>
         <div className="mt-16" >
         <h3 className="text-white text-opacity-10 m-2 text-2xl font-extralight">Desafio 22</h3>
         </div>

          <button className="bg-black-500 rounded-3xl px-3 py-3 mt-16 mb-16">
            <BoraCodar />
          </button>
        </div>
        <div className="flex static justify-end  inset-x-0">
        <div className="absolute mt-12 mr-8 z-10">
          <Profile/>
        </div>
        
          <span className="bg-purple-600 z-1 border-2 w-72 h-96"></span>
        </div>
      </div>
      <footer className="bg-purple-600 w-screen h-3"></footer>
    </div>
  );
}
