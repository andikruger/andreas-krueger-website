import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import heroImg from "../../assets/toughone22.jpg";
import Card from "./Card";
import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const Hero = ({ heading, message, image }) => {
  // create a client instance
  const client = sanityClient({
    apiVersion: "v1",
    projectId: "yavqngwf",
    dataset: "production",
    useCdn: true,
  });

  // create a function to build the image url
  const builder = imageUrlBuilder(client);

  function urlFor(source) {
    return builder.image(source);
  }

  useEffect(() => {
    // let url = urlFor(
    //   "image-0da4e8c76f625ad78280a2283caf4a4f9582d33b-5472x3648-jpg"
    // )
    //   .auto("format")
    //   .fit("max")
    //   .width(720)
    //   .focalPoint(0.5, 0.5)
    //   .toString();

    // console.log(url);
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

  // const styling = {
  //   //backgroundImage: `url(${heroImg.src})`,
  //   backgroundImage: `url(https://cdn.sanity.io/images/yavqngwf/production/0da4e8c76f625ad78280a2283caf4a4f9582d33b-5472x3648.jpg?fp-x=0.5&fp-y=0.5&w=5000&fit=max&auto=format)`,
  //   backgroundPosition: `50% 55%`,
  //   backgroundSize: `cover`,
  // };
  const styling = {
    backgroundImage: `url(${image.src})`,
  };
  return (
    <>
      <header
        className="w-full h-screen bg-cover bg-center flex justify-center items-center"
        style={styling}
      >
        <div className="flex flex-col justify-center items-center">
          <h1 className=" text-center text-6xl text-white font-bold drop-shadow-lg">
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
