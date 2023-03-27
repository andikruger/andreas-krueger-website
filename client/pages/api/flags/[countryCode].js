export default async function handler(req, res) {
  const { countryCode } = req.query;

  const response = await fetch(
    `https://flagsapi.com/${countryCode}/flat/64.png`
  );

  if (response.ok) {
    const imageBuffer = await response.buffer();

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "image/png");
    res.send(imageBuffer);
  } else {
    res.status(404).send();
  }
}
