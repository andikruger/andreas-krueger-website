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

  function handleCV() {
    window.open("/documents/andreas_krueger_cv.pdf", "_blank");
  }
  return (
    <div className="App">
      <Head>
        <title>A Blog</title>
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
        <h1 className="text-3xl md:text-6xl font-bold text-white my-6">
          <TypingText text="My Blog" />
        </h1>
        <div class="">
          <div class="flex items-center justify-center w-64 h-64 rounded-full bg-gray-800">
            <svg
              class="w-16 h-16 text-gray-400 fill-current"
              viewBox="0 0 20 20"
            >
              <path d="M14.004 10.975a2.016 2.016 0 10-4.032 0 2.016 2.016 0 004.032 0zm2.176-2.176A7.981 7.981 0 0118 10c0 4.414-3.584 8-8 8S2 14.414 2 10c0-3.666 2.482-6.765 5.824-7.688.21-.066.433-.103.656-.103h.055c.232 0 .458.037.667.103C11.518 3.235 14 6.334 14 10c0 1.81-.482 3.484-1.32 4.934z" />
            </svg>
          </div>
          <div class="mt-8 text-center text-gray-400">
            <p class="text-lg font-medium">No articles listed yet.</p>
            <p class="mt-2">But they're coming soon!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
