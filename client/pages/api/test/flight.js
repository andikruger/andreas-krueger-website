// create an api route for flight data
// the flight data is stored in the dummy.json file

// import the dummy data
import dummy from "./dummy.json";

// create a function to get the flight data
export default (req, res) => {
  // return the flight data
  res.status(200).json(dummy);
};
