import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";

const Hero = ({ heading, message, image }) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("shown");
        } else {
          entry.target.classList.remove("shown");
        }
      });
    });

    let x, i;
    x = document.querySelectorAll(".blogimg");
    for (i = 0; i < x.length; i++) {
      x[i].classList.add("animated");
    }

    const animated = document.querySelectorAll(".animated");
    animated.forEach((el) => observer.observe(el));

    const Card = document.querySelector(".Card");

    const cardFlip = () => {
      const first = Card.getBoundingClientRect();

      showMenu();

      const last = Card.getBoundingClientRect();

      const deltaX = first.left - last.left;
      const deltaY = first.top - last.top;
      const deltaW = first.width / last.width;
      const deltaH = first.height / last.height;

      Card.animate(
        [
          {
            transformOrigin: "top left",
            transform: `
    translate(${deltaX}px, ${deltaY}px)
    scale(${deltaW}, ${deltaH})
    `,
          },
          {
            transformOrigin: "top left",
            transform: "none",
          },
        ],
        {
          duration: 300,
          easing: "ease-in-out",
          fill: "both",
        }
      );
    };
  }, []);

  const styling = {
    backgroundImage: `url(${image})`,
  };

  return (
    <>
      <header
        className="w-full smallhero-height bg-cover bg-center flex justify-center items-center"
        style={styling}
      >
        <div className="flex flex-col justify-center items-center">
          <h1 className=" text-center text-5xl text-white font-bold drop-shadow-lg">
            {heading}
          </h1>
          <p className="mt-5 text-center text-lg text-white opacity-70">
            {message}
          </p>
        </div>
      </header>
    </>
  );
};

export default Hero;
