import { useState, useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TypingText from "@/components/TypingText";
import CtaButton from "@/components/CtaButton";
import photo from "../../assets/andreas_kruger.jpeg";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function App() {
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const [airportTableVisibility, setAirportTableVisibility] =
    useState("d-none");
  const [airportNoResultsVisibility, setAirportNoResultsVisibility] =
    useState("d-none");
  const [searchedAirport, setSearchedAirport] = useState(
    '{"airport":"n/a","country_code":"","iata":"Unknown","icao":"Unknown","latitude":0,"longitude":0,"region_name":"n/a"}'
  );
  const [airportInfoUrl, setAirportInfoUrl] = useState("#");

  function handleChange2(event) {
    var airportFetchUrl = "https://hexdb.io/api/v1/airport/iata/";

    if (event.target.value.length == 3 || event.target.value.length == 4) {
      if (event.target.value.length == 3) {
        airportFetchUrl = "https://hexdb.io/api/v1/airport/iata/";
      }
      if (event.target.value.length == 4) {
        airportFetchUrl = "https://hexdb.io/api/v1/airport/icao/";
      }
      fetch(airportFetchUrl + event.target.value)
        .then((response) => response.json())
        .then((responseData) => {
          console.log(responseData);
          setSearchedAirport(responseData);
          setAirportInfoUrl("airport/" + responseData.icao);
          if (typeof responseData.icao !== "undefined") {
            setAirportNoResultsVisibility("d-none");
            setAirportTableVisibility("d-block");
          } else {
            setAirportTableVisibility("d-none");
            setAirportNoResultsVisibility("d-block");
          }
        })
        .catch((e) => {
          setSearchedAirport(
            '{"airport":"n/a","country_code":"","iata":"Unknown","icao":"Unknown","latitude":0,"longitude":0,"region_name":"n/a"}'
          );
          setAirportTableVisibility("d-none");
          setAirportNoResultsVisibility("d-block");
        });
    } else {
      setAirportTableVisibility("d-none");
      setAirportNoResultsVisibility("d-none");
    }
  }

  function handleClick() {
    window.open("contact", "_blank");
  }

  return (
    <div className="App">
      <Head>
        <title>Airport</title>
        <meta name="description" content="Learn more about me and my work." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: {
            enable: true,
            zIndex: 1,
          },
          particles: {
            number: {
              value: 10,
              density: {
                enable: false,
                value_area: 800,
              },
            },
            color: {
              value: "#fff",
            },
            shape: {
              type: "atom",
              options: {
                sides: 5,
              },
            },
            opacity: {
              value: 0.8,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 4,
              random: false,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
              },
            },
            rotate: {
              value: 0,
              random: true,
              direction: "clockwise",
              animation: {
                enable: true,
                speed: 5,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 600,
              color: "#ffffff",
              opacity: 0.4,
              width: 2,
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: ["grab"],
              },
              onclick: {
                enable: false,
                mode: "bubble",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 200,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
          background: {
            color: "#111",
            image: "",
            position: "50% 50%",
            repeat: "no-repeat",
            size: "cover",
          },
        }}
      />

      <div className="relative z-10 mt-24 flex flex-col items-center">
        {/* <div class="w-full max-w-md mx-auto">
          <form class="mt-6">
            <div className="flex justify-center">
              <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
                <div className="relative">
                  <input
                    type="text"
                    id="search"
                    className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-lg text-white bg-transparent  border-0 border-b-2 border-gray-300 appearance-none text-white border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#67162c] peer"
                    placeholder=" "
                    name="search"
                  />
                  <label
                    htmlFor="search"
                    className="absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-[#67162c] peer-focus:text-[#67162c] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    Search
                  </label>
                </div>
              </div>
            </div>
          </form>
        </div> */}

        {/* ak input end */}

        <div className="flex justify-center">
          <div className="">
            <div className="relative">
              <input
                type="text"
                id="search"
                onChange={handleChange2}
                className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-lg text-white bg-transparent  border-0 border-b-2 border-gray-300 appearance-none text-white border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#67162c] peer"
                placeholder=" "
                name="search"
              />
              <label
                htmlFor="search"
                className="absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-[#67162c] peer-focus:text-[#67162c] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                Search
              </label>
            </div>
          </div>
        </div>

        <div className={airportTableVisibility}>
          {/* <table
            className="mt-2 text-center border"
            style={{ width: "100%" }}
            id="airport-search-result"
          >
            <thead className="bg-success text-light">
              <tr>
                <th>Airport</th>
                <th>ICAO</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Link href={airportInfoUrl}>{searchedAirport?.airport}</Link>
                </td>
                <td>{searchedAirport?.icao}</td>
              </tr>
            </tbody>
          </table> */}
          <table className="w-full bg-transparent text-gray-800">
            <thead>
              <tr className="bg-gray-200 text-sm">
                <th className="font-medium py-3 px-6 text-left">Airport</th>
                <th className="font-medium py-3 px-6 text-left">ICAO</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-100 text-sm">
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  <Link href={airportInfoUrl}>{searchedAirport?.airport}</Link>
                </td>
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  {searchedAirport?.icao}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
