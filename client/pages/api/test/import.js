import nc from "next-connect";

import axios from "axios";
import config from "../../../utils/config";

const handler = nc();

handler.post(async (req, res) => {
  console.log(req);
  // create a map to convert the association to the correct province
  const provinceMap = {
    CGA: "Gauteng",
    EPA: "Eastern Cape",
    KZN: "KwaZulu-Natal",
    AVT: "Gauteng",
    WPA: "Western Cape",
    AGN: "Gauteng",
    AFS: "Free State",
    BOR: "Eastern Cape",
    MPU: "Mpumalanga",
    CNW: "North West",
    SWD: "Western Cape",
    BOL: "Limpopo",
  };

  for (let i = 0; i < req.body.length; i++) {
    const province = provinceMap[req.body[i].association.toUpperCase()];

    const association = req.body[i].association.toUpperCase();
    const projectId = config.projectId;
    const dataset = config.dataset;
    const tokenWithWriteAccess =
      "skLhObbxImVbV7hid4q8PUXHsR1YvBb7IEhgBD28ywl980537br1XyER9AMWzfO0qvetYfuiwTga5H7gflLFyWSojvQ2FyVbOghKDGPQO286ATzbZ31fc8aeeGRuqoSykMLGajFdY7yYpTsDNLVLsKL7XI8l65Cm5EPbT7qLMQRCecHUoD72";
    const createMutations = [
      {
        create: {
          _type: "race",
          name: req.body[i].name,
          date: req.body[i].date,
          distance: req.body[i].distance,
          venue: req.body[i].venue,
          startTime: `${req.body[i].date} ${req.body[i].starttime}`,
          club: {
            clubName: req.body[i].club,
            contactPerson: req.body[i].contactPerson,
            contactNumber: req.body[i].contactNumber,
            contactEmail: req.body[i].contactEmail,
          },
          province: province,
          association: association,
        },
      },
    ];

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
  }

  res.send({
    success: true,
    message: `Sent`,
  });
});

export default handler;
