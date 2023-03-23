export default function handler(req, res) {
  const { slug } = req.query;
  console.log(slug);
  res.end(`Post: ${slug}`);
}
