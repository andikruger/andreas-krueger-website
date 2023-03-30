// create an api route for flight data
// the flight data is stored in the dummy.json file

// create a function to get the flight data
export default (req, res) => {
  // return the flight data
  // fetch(
  //   "https://opensky-network.org/api/states/all?lamin=33.609667&lomin=-20.388631&lamax=73.597828&lomax=50.588610"
  // );
  fetch(`https://hexdb.io/api/v1/airport/icao/${req.query.slug}`)
    .then((response) => response.json())
    .then((data) => {
      res.status(200).json(data);
    });
};
