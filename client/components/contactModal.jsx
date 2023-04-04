import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SiMinutemailer } from "react-icons/si";
function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/sendgrid", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const { error } = await res.json();
    if (error) {
      toast.error(error);
    } else {
      toast.success("Message sent successfully");
    }
  };
  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.1, backgroundColor: "#FF008C" }}
        whileTap={{ scale: 0.9 }}
        className="bg-gray-900 text-white rounded-lg py-3 px-8 font-bold text-lg transition-all hover:shadow-lg"
        onClick={() => setIsOpen(true)}
      >
        Send me a message
      </motion.button>
      {isOpen && (
        <div className="fixed z-40 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
            &#8203;
            <div
              className="inline-block align-bottom bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div className="bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                    <SiMinutemailer className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3
                      className="text-lg leading-6 font-medium text-white"
                      id="modal-headline"
                    >
                      Send me a message
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm leading-5 text-gray-500">
                        <div className="flex justify-center">
                          <form
                            className="w-full max-w-lg"
                            onSubmit={handleSubmit}
                          >
                            <div className="">
                              <div className="relative">
                                <input
                                  type="text"
                                  id="name"
                                  onChange={handleChange}
                                  className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-lg text-white bg-transparent  border-0 border-b-2 border-gray-300 appearance-none text-white border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#67162c] peer"
                                  placeholder=" "
                                  name="name"
                                />
                                <label
                                  htmlFor="name"
                                  className="absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-[#67162c] peer-focus:text-[#67162c] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                                >
                                  Your Name
                                </label>
                              </div>
                              <div className="relative">
                                <input
                                  type="text"
                                  id="subject"
                                  onChange={handleChange}
                                  className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-lg text-white bg-transparent  border-0 border-b-2 border-gray-300 appearance-none text-white border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#67162c] peer"
                                  placeholder=" "
                                  name="subject"
                                />
                                <label
                                  htmlFor="subject"
                                  className="absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-[#67162c] peer-focus:text-[#67162c] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                                >
                                  Your Subject
                                </label>
                              </div>
                              <div className="relative">
                                <input
                                  type="text"
                                  id="email"
                                  onChange={handleChange}
                                  className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-lg text-white bg-transparent  border-0 border-b-2 border-gray-300 appearance-none text-white border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#67162c] peer"
                                  placeholder=" "
                                  name="email"
                                />
                                <label
                                  htmlFor="email"
                                  className="absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-[#67162c] peer-focus:text-[#67162c] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                                >
                                  Your Email
                                </label>
                              </div>
                              <div className="relative">
                                <textarea
                                  type="text"
                                  id="message"
                                  onChange={handleChange}
                                  className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-lg text-white bg-transparent  border-0 border-b-2 border-gray-300 appearance-none text-white border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#67162c] peer"
                                  placeholder=" "
                                  name="message"
                                />
                                <label
                                  htmlFor="message"
                                  className="absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-[#67162c] peer-focus:text-[#67162c] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                                >
                                  Your Message
                                </label>
                              </div>
                            </div>
                            {/* right align a button */}
                            <div className="flex justify-end pt-2">
                              <motion.button
                                whileHover={{
                                  scale: 1.1,
                                  backgroundColor: "#FF008C",
                                }}
                                whileTap={{ scale: 0.9 }}
                                className="bg-gray-900 text-white rounded-lg py-3 px-8 font-bold text-lg transition-all hover:shadow-lg"
                                onClick={handleSubmit}
                              >
                                Send
                              </motion.button>
                            </div>
                          </form>
                        </div>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                  <motion.button
                    whileHover={{ scale: 1.1, backgroundColor: "#FF008C" }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-gray-900 text-white rounded-lg py-3 px-8 font-bold text-lg transition-all hover:shadow-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    Close
                  </motion.button>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
