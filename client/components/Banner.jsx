import { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";

function BannerMessage({ message }) {
  const [isVisible, setIsVisible] = useState(true);

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem("bannerMessage", "dismissed");
  };

  useEffect(() => {
    const isDismissed = sessionStorage.getItem("bannerMessage");
    if (isDismissed) {
      setIsVisible(false);
    }
  }, []);

  return (
    <div
      className={`${
        isVisible ? "block" : "hidden"
      } bg-yellow-200 py-3 px-6 rounded-md shadow-md flex justify-between items-center fixed top-0 left-0 w-full z-50`}
    >
      <p className="text-gray-800">{message}</p>
      <button
        onClick={handleDismiss}
        className="text-gray-600 hover:text-gray-800 ml-4"
      >
        <IoMdClose />
      </button>
    </div>
  );
}

export default BannerMessage;
