import React, { useState, useRef } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import ReCAPTCHA from "react-google-recaptcha";

const contactForm = () => {
  // create a function that sends the form data to the server
  const sendEmail = () => {
    // send a post request to the server to /api/contact
    axios
      .post("/api/contact", formData)
      .then((res) => {
        // if the response is successful, show a success message
        if (res.data.success) {
          toast.success(res.data.message);
          // reset the form
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        } else {
          // if the response is not successful, show an error message
          toast.error("Something went wrong, please use the above email");
        }
      })
      .catch((err) => {
        // if there is an error, show an error message
        toast.error(err.response.data.message);
      });
  };

  const sitekey = "6LeKEp8jAAAAAHdjyJIqRNNBEXIVljZKaLvaivpF";
  const captchaRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleSubmit = (e) => {
    let isHuman = false;
    e.preventDefault();
    const token = captchaRef.current.getValue();
    captchaRef.current.reset();
    console.log(token);
    const data = {
      ...formData,
      token,
    };

    // axios
    //   .post("/api/verifyCaptcha", data)
    //   .then((res) => {
    //     if (res.data.success) {
    //       console.log(res.data);
    //       sendEmail();
    //     } else {
    //       toast.error("Invalid captcha");
    //     }
    //   })
    //   .catch((err) => {
    //     toast.error(err.response.data.message);
    //   });
    sendEmail();
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="max-w-[1240px] m-auto p-4 h-screen">
      <h1 className="text-2xl font-bold text-center p-4">
        Send us a 🏃 message
      </h1>
      <form className="max-w-[600px] m-auto" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-2">
          <input
            className="border shadow-lg p-3"
            type="text"
            placeholder="Name"
            name="name"
            onChange={handleInputChange}
          />
          <input
            className="border shadow-lg p-3"
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleInputChange}
          />
        </div>
        <input
          className="border shadow-lg p-3 w-full my-2"
          type="text"
          placeholder="Subject"
          name="subject"
          onChange={handleInputChange}
        />
        <textarea
          className="border shadow-lg p-3 w-full"
          cols={30}
          rows={10}
          placeholder="Message"
          name="message"
          onChange={handleInputChange}
        ></textarea>
        {/* center recaptcha */}
        <div className="flex justify-center">
          <ReCAPTCHA size="normal" sitekey={sitekey} ref={captchaRef} />
        </div>

        <button className="bg-[#67162c] text-white hover:bg-[#470819] border shadow-lg p-3 w-full mt-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default contactForm;
