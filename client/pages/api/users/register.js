import nc from "next-connect";
import bcrypt from "bcryptjs";
import axios from "axios";
import config from "../../../utils/config";
import { signToken } from "../../../utils/auth";
import client from "../../../utils/client";

const handler = nc();

handler.post(async (req, res) => {
  // turn the email into a lowercase string
  const email = req.body.email.toLowerCase();
  const projectId = config.projectId;
  const dataset = config.dataset;
  const tokenWithWriteAccess =
    "skLhObbxImVbV7hid4q8PUXHsR1YvBb7IEhgBD28ywl980537br1XyER9AMWzfO0qvetYfuiwTga5H7gflLFyWSojvQ2FyVbOghKDGPQO286ATzbZ31fc8aeeGRuqoSykMLGajFdY7yYpTsDNLVLsKL7XI8l65Cm5EPbT7qLMQRCecHUoD72";
  const createMutations = [
    {
      create: {
        _type: "user",
        name: req.body.name,
        email: email,
        password: bcrypt.hashSync(req.body.password),
        isAdmin: false,
        isBanned: false,
      },
    },
  ];
  const existUser = await client.fetch(
    `*[_type == "user" && email == $email][0]`,
    {
      email: email,
    }
  );
  if (existUser) {
    return res
      .status(401)
      .send({ success: false, message: "Email aleardy exists" });
  }
  const { data } = await axios.post(
    `https://${projectId}.api.sanity.io/v1/data/mutate/${dataset}?returnIds=true`,
    { mutations: createMutations },
    {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${tokenWithWriteAccess}`,
      },
    }
  );
  const userId = data.results[0].id;
  const user = {
    _id: userId,
    name: req.body.name,
    email: email,
    isAdmin: false,
    isBanned: false,
    resetPasswordToken: "inittoken",
    resetPasswordExpire: 0,
  };
  const token = signToken(user);

  res.send({
    success: true,
    message: `Welcome to RAC ${user.name}, please allow up to a minute until the registration is compleated`,
  });
});

export default handler;
