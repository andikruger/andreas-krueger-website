import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-200">
      {/* create a copyright message, a link to the privacy policy and text saying "Made with ❤️ by Vitomilix" in one line*/}
      {/* print the current year */}

      <p className="text-center">
        {" "}
        &copy; {new Date().getFullYear()} Rand Athletic Club
        <a className="text-left p-4" href="/privacy-policy">
          Privacy policy
        </a>
      </p>
      <p className="text-right p-4">Made with ❤️ by Vitomilix</p>
      {/* create a link to the privacy policy next to the copyright link */}
    </footer>
  );
};

export default Footer;
