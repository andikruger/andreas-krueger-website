import Cors from "cors";

const cors = Cors({
  methods: ["GET", "HEAD"],
});

export default function initMiddleware(handler) {
  return (req, res) =>
    new Promise((resolve, reject) => {
      cors(req, res, (result) => {
        if (result instanceof Error) {
          return reject(result);
        }
        return resolve(handler(req, res));
      });
    });
}
