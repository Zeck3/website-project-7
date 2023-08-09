import React from "react";
import GoogleLogo from "./googlelogo_light_color_272x92dp.png";
import { useState } from "react";

export default function App() {
  const [textSearch, setTextSearch] = useState('');

  const handleChange = event => {
    setTextSearch(event.target.value);
  }

  const handleClick = () => {
    window.location.replace('https://www.google.com/search?q=' + textSearch);
  };
    
  return (
    <div className="relative flex flex-col w-screen h-screen bg-background1">
      <div className="relative flex w-full h-16 p-2 bg-red-200">
        <div className="relative flex items-center justify-end w-full bg-red-700">
          <div className="flex h-12 gap-1 pl-8 pr-1">
            <div className="flex items-center justify-center">
              <div className="flex items-center justify-center pr-4">
                <a href="/" className="justify-center pl-4 text-xs text-text-white hover:underline">Gmail</a>
                <a href="/" className="justify-center pl-4 text-xs text-text-white hover:underline">Images</a>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center">
              <button className="flex flex-row items-center justify-center w-10 h-10 text-text-grey">
                <span class="material-symbols-outlined">
                  apps
                </span>
              </button>
              <button className="flex flex-row items-center justify-center w-10 h-10 text-text-white">
                <span class="material-symbols-outlined">
                  account_circle
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-end justify-center w-screen h-72">
        <img src={GoogleLogo} alt="googlelogo_light_color_272x92dp" className="h-24">
        </img>
      </div>
      <div className="relative flex flex-col items-center w-screen h-40 gap-4 p-5">
        <div className="relative w-1/3 p-2 px-12 border rounded-full resize-none h-11 border-text-grey bg-background1 hover:bg-button-color">
          <span class="material-symbols-outlined absolute left-3 text-text-white">
            search
          </span>
          <input id="Input" onChange={handleChange} className="w-full h-full bg-transparent outline-none resize-none text-text-white">
          </input>
        </div>
        <div className="relative flex justify-center w-1/3">
          <button onClick={handleClick} className="flex items-center justify-center w-32 h-8 p-4 mx-1 my-3 text-sm text-center border rounded-sm bg-button-color border-button-color hover:border-text-grey text-text-white">
            Google Search
          </button>
          <button onClick={handleClick} className="flex items-center justify-center w-40 h-8 p-4 mx-1 my-3 text-sm text-center border rounded-sm bg-button-color border-button-color hover:border-text-grey text-text-white">
            I'm Feeling Lucky
          </button>
        </div>
      </div>
      <div className="w-screen h-12 px-8 py-4 mt-auto bg-background2">
        <a href="/" className="text-text-grey hover:underline">
          Philippines
        </a>
      </div>
      <hr className="text-button-color"></hr>
      <div className="flex flex-row justify-between w-screen h-12 px-8 py-4 bg-background2">
        <div className="flex gap-4">
          <ul className="relative flex justify-center gap-6">
            <a href="/" className="text-sm text-text-grey hover:underline">About</a>
            <a href="/" className="text-sm text-text-grey hover:underline">Advertising</a>
            <a href="/" className="text-sm text-text-grey hover:underline">Business</a>
            <a href="/" className="text-sm text-text-grey hover:underline">How Search Works</a>
          </ul>
        </div>
        <div className="flex gap-4">
          <ul className="relative flex justify-center gap-6">
            <a href="/" className="text-sm text-text-grey hover:underline">Privacy</a>
            <a href="/" className="text-sm text-text-grey hover:underline">Terms</a>
            <a href="/" className="text-sm text-text-grey hover:underline">Settings</a>
          </ul>
        </div>
      </div>
    </div>
  );
}