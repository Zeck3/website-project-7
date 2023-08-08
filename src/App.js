import React from "react";
import GoogleLogo from "./googlelogo_light_color_272x92dp.png";
import { useState } from "react";

export default function App() {
  const [message, setMessage] = useState('');

  const handleChange = event => {
    setMessage(event.target.value);
  }

  const handleClick = () => {
    window.location.replace('https://www.google.com/search?q=' + message);
  };
    
  return (
    <div className="flex relative flex-col w-screen h-screen bg-background1">
      <div className="flex relative bg-red-200 w-full h-16 p-2">
        <div className="flex relative justify-end bg-red-700 w-full items-center">
          <div className="flex pl-8 pr-1 h-12 gap-1">
            <div className="flex justify-center items-center">
              <div className="flex justify-center items-center pr-4">
                <a href="/" className="text-xs text-text-white justify-center hover:underline pl-4">Gmail</a>
                <a href="/" className="text-xs text-text-white justify-center hover:underline pl-4">Images</a>
              </div>
            </div>
            <div className="flex flex-row justify-center items-center">
              <button className="w-10 h-10 text-text-grey flex flex-row justify-center items-center">
                <span class="material-symbols-outlined">
                  apps
                </span>
              </button>
              <button className="w-10 h-10 text-text-white flex flex-row justify-center items-center">
                <span class="material-symbols-outlined">
                  account_circle
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-72 w-screen flex justify-center items-end">
        <img src={GoogleLogo} alt="googlelogo_light_color_272x92dp" className="h-24">
        </img>
      </div>
      <div className="flex relative flex-col w-screen h-40 items-center p-5 gap-4">
        <div className="relative h-11 w-1/3 rounded-full border border-text-grey resize-none bg-background1 p-2 px-12">
          <span class="material-symbols-outlined absolute left-3 text-text-white">
            search
          </span>
          <input id="Input" onChange={handleChange} className="text-text-white h-full w-full resize-none bg-background1 outline-none">
          </input>
        </div>
        <div className="flex relative w-1/3 justify-center">
          <button onClick={handleClick} className="rounded-sm w-32 h-8 p-4 my-3 mx-1 border bg-button-color border-none text-sm flex items-center justify-center text-text-white text-center">
            Google Search
          </button>
          <button onClick={handleClick} className="rounded-sm w-40 h-8 p-4 my-3 mx-1 border bg-button-color border-none text-sm flex items-center justify-center text-text-white text-center">
            I'm Feeling Lucky
          </button>
          <a href="/" id="GoogleApi"></a>
        </div>
      </div>
      <div className="w-screen h-12 bg-background2 mt-auto py-4 px-8">
        <a href="/" className="text-text-grey hover:underline">
          Philippines
        </a>
      </div>
      <hr className="text-button-color"></hr>
      <div className="flex flex-row justify-between w-screen h-12 bg-background2 py-4 px-8">
        <div className="flex gap-4">
          <ul className="flex relative justify-center gap-6">
            <a href="/" className="text-sm text-text-grey hover:underline">About</a>
            <a href="/" className="text-sm text-text-grey hover:underline">Advertising</a>
            <a href="/" className="text-sm text-text-grey hover:underline">Business</a>
            <a href="/" className="text-sm text-text-grey hover:underline">How Search Works</a>
          </ul>
        </div>
        <div className="flex gap-4">
          <ul className="flex relative justify-center gap-6">
            <a href="/" className="text-sm text-text-grey hover:underline">Privacy</a>
            <a href="/" className="text-sm text-text-grey hover:underline">Terms</a>
            <a href="/" className="text-sm text-text-grey hover:underline">Settings</a>
          </ul>
        </div>
      </div>
    </div>
  );
}