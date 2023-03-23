import nc from "next-connect";

const handler = nc();

handler.get(async (req, res) => {
  const { slug } = req.query;
  const response = await fetch(
    `https://yavqngwf.api.sanity.io/v1/data/query/production?query=*%5B_type%20%3D%3D%20%22race%22%20%26%26%20slug.current%20%3D%3D%20%24slug%20%5D&%24slug=%22${slug}%22`
  );
  const data = await response.json();
  res.send(data.result[0]);
});

export default handler;
