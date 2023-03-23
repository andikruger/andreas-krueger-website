import nc from "next-connect";
import bcrypt from "bcryptjs";
import { signToken } from "../../../utils/auth";
import client from "../../../utils/client";
import config from "../../../utils/config";
import crypto from "crypto";
import axios from "axios";
const sendEmail = require("../../../utils/sendEmail");
const handler = nc();

handler.post(async (req, res) => {
  const user = await client.fetch(`*[_type == "user" && email == $email][0]`, {
    email: req.body.email.toLowerCase(),
  });

  if (user) {
    console.log(user);
    const resetToken = crypto.randomBytes(20).toString("hex");
    let dateToExpire = Date.now() + 60 * (60 * 1000);
    const tokenWithWriteAccess =
      "skLhObbxImVbV7hid4q8PUXHsR1YvBb7IEhgBD28ywl980537br1XyER9AMWzfO0qvetYfuiwTga5H7gflLFyWSojvQ2FyVbOghKDGPQO286ATzbZ31fc8aeeGRuqoSykMLGajFdY7yYpTsDNLVLsKL7XI8l65Cm5EPbT7qLMQRCecHUoD72";
    await axios.post(
      `https://${config.projectId}.api.sanity.io/v1/data/mutate/${config.dataset}`,
      {
        mutations: [
          {
            patch: {
              id: user._id,
              set: {
                resetPasswordToken: resetToken,
                resetPasswordExpire: dateToExpire,
              },
            },
          },
        ],
      },
      {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${tokenWithWriteAccess}`,
        },
      }
    );

    const message = `
        <h2>You have requested a password reset</h2>
        <p>Please go to this link to reset your password</p>
        <a href="${req.headers.origin}/auth/resetPassword/${resetToken}" clicktracking=off>Reset Password</a>
        `;

    try {
      await sendEmail({
        to: user.email,
        subject: "Password reset token",
        text: message,
      });
      res.status(200).json({
        success: true,
        message: "Email sent successfully, please check your spam folder too",
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "Email could not be sent",
      });
    }
  } else {
    res.status(404).json({
      success: false,
      message: "The email you entered does not exist",
    });
  }
});

export default handler;
