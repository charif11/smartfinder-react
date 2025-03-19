import React from "react";
import { NavLink } from "react-router-dom";
import { ArrowRight } from 'lucide-react';

function Home() {
  return (
    <div className="flex flex-wrap-reverse relative justify-evenly items-center h-[87vh] px-6 overflow-hidden">
      <div className="text-3xl">
        <h1 className="text-5xl border-b-4 border-blue-500 pb-5">
          Project IOT
        </h1>
        <p className="my-5">smart finder</p>
        <NavLink to="/data" className="btn btn-primary w-[10rem] text-xl">
          View Data
          <ArrowRight/>
        </NavLink>
      </div>
      <div className="relative">
        <div className="bg-red-500 absolute w-full h-full rounded-full top-10 left-5"></div>
        <img src="home.png" className="-rotate-10" />
      </div>
    </div>
  );
}

export default Home;
