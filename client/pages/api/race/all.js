// use fetch to get the data from the API
import nc from "next-connect";

const handler = nc();

handler.get(async (req, res) => {
  console.log("CALLED API");
  const response = await fetch(
    "https://yavqngwf.api.sanity.io/v1/data/query/production?query=*%5B_type%20%3D%3D%20%22race%22%5D"
  );
  const data = await response.json();
  res.send(data.result);
});

export default handler;
