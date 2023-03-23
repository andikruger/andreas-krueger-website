import react from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
const Quote = (props) => {
  // if the author is not provided, then we will not display the author
  const author = props.author ? (
    <>
      <p className="text-sm text-gray-500 font-bold text-center p-4 "> - </p>
      <p className="text-sm text-gray-500 font-bold text-center p-4 py-0">
        {props.author}
      </p>
    </>
  ) : null;

  return (
    <div className="flex flex-col items-center p-4">
      <div className="flex flex-row items-center">
        <FaQuoteLeft className="text-md text-gray-500" />
        <p className="text-lg text-gray-500 font-bold text-center p-4 py-0">
          {props.text}
        </p>

        {author}

        <FaQuoteRight className="text-md text-gray-500" />
      </div>
    </div>
  );
};

export default Quote;
