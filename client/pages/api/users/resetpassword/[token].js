import nc from "next-connect";
import bcrypt from "bcryptjs";
import { useRouter } from "next/router";
import { signToken } from "../../../../utils/auth";
import client from "../../../../utils/client";
import config from "../../../../utils/config";
import crypto from "crypto";
import axios from "axios";

const handler = nc();

handler.put(async (req, res) => {
  const { token } = req.query;

  const user = await client.fetch(
    `*[_type == "user" && resetPasswordToken == $resetPasswordToken][0]`,
    {
      resetPasswordToken: token,
    }
  );

  const now = Date.now();
  let debug = {
    now: now,
    expire: user.resetPasswordExpire,
    isExpired: now > user.resetPasswordExpire,
  };
  console.log(debug);
  if (user && user.resetPasswordExpire > now) {
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
                password: bcrypt.hashSync(req.body.password),
                resetPasswordToken: " ",
                resetPasswordExpire: 0,
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

    const token = signToken(user);
    res.status(200).json({
      success: true,
      message: "Your password has been changed, please log in again",
      token,
    });
  } else {
    res.status(400).json({
      success: false,
      message: "The token is invalid",
    });
  }
});

export default handler;
