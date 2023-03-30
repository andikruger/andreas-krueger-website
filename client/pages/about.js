import { useState, useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TypingText from "@/components/TypingText";
import CtaButton from "@/components/CtaButton";
import photo from "../assets/andreas_kruger.jpeg";

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

  const { ref, inView } = useInView();
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  function handleClick() {
    window.open("contact", "_blank");
  }

  return (
    <div className="App">
      <Head>
        <title>About Me</title>
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
        <div className="w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden shadow-lg">
          <Image
            src={photo}
            alt="Profile picture"
            width={500}
            height={1000}
            layout="responsive"
          />
        </div>
        <h1 className="text-3xl md:text-6xl font-bold text-white my-6">
          <TypingText text="Andreas Krüger" />
        </h1>
        <p className="text-lg md:text-xl text-gray-300 text-center px-6 md:px-20 mb-12">
          Howzit, I am a professional irritant, an aviation enthusiast and a
          website developer based in Vienna, Austria. You might find me at the
          Airport, in front of the computer, exploring a City or jogging. Who
          knows?
        </p>
        <CtaButton text="Get in touch" onClick={handleClick} />
        <div className="pt-2">
          {" "}
          <CtaButton text="My CV" onClick={handleClick} />
        </div>
      </div>
    </div>
  );
}
