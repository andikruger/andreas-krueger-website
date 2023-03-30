// create an api route for flight data
// the flight data is stored in the dummy.json file

// create a function to get the flight data
export default (req, res) => {
  var fetchEnd = Math.round(Date.now() / 1000);
  var fetchBegin = fetchEnd - 86400;
  // return the flight data
  // fetch(
  //   "https://opensky-network.org/api/states/all?lamin=33.609667&lomin=-20.388631&lamax=73.597828&lomax=50.588610"
  // );
  fetch(
    `https://opensky-network.org/api/flights/departure?airport=${req.query.slug}&begin=${fetchBegin}&end=${fetchEnd}`
  )
    .then((response) => response.json())
    .then((data) => {
      res.status(200).json(data);
    });
};
