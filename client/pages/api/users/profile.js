import axios from "axios";
import nc from "next-connect";
import config from "../../../utils/config";
import { signToken, isAuth } from "../../../utils/auth";

const handler = nc();

handler.use(isAuth);
handler.put(async (req, res) => {
  const tokenWithWriteAccess =
    "sk6ldr1KjDPUq1Efuv2wckc3O77hV71v5wX57wrfUiuSwqV1TfdTuPEdqVQWgt8qnrBYIvkQhVGuOzj2DUMBptE8c0cENBtUzNnMGLNlAGoET9QeCnJJEpv4DTLgnGcPQAP9jN9TH1tIk1KX7JCiGcqDSikyhqRH1sOROtTKUyHUoWQ79Go7";
  await axios.post(
    `https://${config.projectId}.api.sanity.io/v1/data/mutate/${config.dataset}`,
    {
      mutations: [
        {
          patch: {
            id: req.user._id,
            set: {
              name: req.body.name,
              email: req.body.email,
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

  const user = {
    _id: req.user._id,
    name: req.body.name,
    email: req.body.email,
    isAdmin: req.user.isAdmin,
  };
  const token = signToken(user);
  res.send({ ...user, token });
});

export default handler;
