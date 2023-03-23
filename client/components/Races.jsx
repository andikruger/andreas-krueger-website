import React from "react";
import Link from "next/link";
const Races = () => {
  return (
    <>
      <div className="shadow-xl animate Card w-full m-4 mx-auto text-center py-4 bg-white rounded-lg">
        <p className="text-2xl font-bold">Fancy a Run? 🏃</p>
        {/* center text */}
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <p className="text-2xl font-bold">
              All upcomming races can be found
            </p>
            <Link legacyBehavior href="races">
              <a className="bg-[#67162c] hover text-white font-bold py-2 px-4 rounded">
                Here
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Races;
