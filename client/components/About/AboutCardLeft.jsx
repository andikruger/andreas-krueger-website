import React from "react";
import Image from "next/image";
const AboutCardLeft = ({ text, image }) => {
  // create a card with rounded corners and a shadow
  // the content of the card is an image on the left and text on the right
  // the image should be 1/4 of the width of the card
  // the text should be 3/4 of the width of the card

  return (
    <div className="flex flex-row rounded-lg shadow-lg m-4 lg:w-1/2 bg-white">
      <div className="w-full">
        <p className="text-strong m-4">{text}</p>
      </div>
      <div className="w-1/2">
        <Image
          src={image.src}
          alt={image.alt}
          width={300}
          height={100}
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default AboutCardLeft;
