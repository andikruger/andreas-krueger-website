import React, { useEffect, useState } from "react";
import { FaPlane } from "react-icons/fa";
import { useRouter } from "next/router";
import AirportMap from "./AirportMap";
function FlightTr(props) {
  var d = new Date(0);
  d.setUTCSeconds(props.firstSeen);
  var firstSeenTime = d.toLocaleDateString() + " " + d.toLocaleTimeString();
  var d2 = new Date(0);
  d2.setUTCSeconds(props.lastSeen);
  var lastSeenTime = d2.toLocaleDateString() + " " + d2.toLocaleTimeString();
  var className = "alert-secondary";
  var link1 = "./../flight-info/hex-" + props.icao24;
  var st = lastSeenTime;
  if (props.type == "departure") {
    st = firstSeenTime;
  }

  return (
    <tr className={className}>
      <td>
        <a href={link1}>{props.callSign}</a>
      </td>
      <td>
        <a href={props.otherAirport}>{props.otherAirport}</a>
      </td>
      <td>
        <em>{st}</em>
      </td>
    </tr>
  );
}

function Airport({ airport }) {
  const [reg, setReg] = useState("Unknown");
  const [aircraftData, setAircraftData] = useState({
    ICAOTypeCode: "",
    Manufacturer: "Unknown",
    ModeS: "",
    OperatorFlagCode: "",
    RegisteredOwners: "Unknown",
    Registration: "",
    Type: "",
  });
  const [arrivals, setArrivals] = useState(
    '[{"icao24":"Unknown","firstSeen":0,"estDepartureAirport":"Unknown","lastSeen":0,"estArrivalAirport":"Unknown","callsign":"No Callsign","estDepartureAirportHorizDistance":0,"estDepartureAirportVertDistance":0,"estArrivalAirportHorizDistance":0,"estArrivalAirportVertDistance":0,"departureAirportCandidatesCount":1,"arrivalAirportCandidatesCount":2}]'
  );
  const [departures, setDepartures] = useState(
    '[{"icao24":"Unknown","firstSeen":0,"estDepartureAirport":"Unknown","lastSeen":0,"estArrivalAirport":"Unknown","callsign":"No Callsign","estDepartureAirportHorizDistance":0,"estDepartureAirportVertDistance":0,"estArrivalAirportHorizDistance":0,"estArrivalAirportVertDistance":0,"departureAirportCandidatesCount":1,"arrivalAirportCandidatesCount":2}]'
  );
  const [airportData, setAirportData] = useState(
    '{"airport":"Unknown","country_code":"N/A","iata":"Unknown","icao":"Unknown","latitude":150,"longitude":10,"region_name":"Unknown"}'
  );
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);

  var fetchEnd = Math.round(Date.now() / 1000);
  var fetchBegin = fetchEnd - 86400;

  var fetchurl0 =
    "https://opensky-network.org/api/flights/arrival?airport=" +
    airport +
    "&begin=" +
    fetchBegin +
    "&end=" +
    fetchEnd; // Real live data
  var fetchurl1 =
    "https://opensky-network.org/api/flights/departure?airport=" +
    airport +
    "&begin=" +
    fetchBegin +
    "&end=" +
    fetchEnd; // Test data

  useEffect(() => {
    console.log("Fetching data for " + airport);
    fetch(`/api/airport/info/${airport}`)
      .then((response) => response.json())
      .then((responseData) => {
        setAirportData(responseData);
        console.log(responseData);
      })
      .catch((e) => {
        console.log(e.toString());
        setAirportData(
          '{"airport":"Unknown","country_code":"N/A","iata":"Unknown","icao":"Unknown","latitude":150,"longitude":10,"region_name":"Unknown"}'
        );
      });

    fetch(`/api/airport/arrival/${airport}`)
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
        setArrivals(responseData);
      })
      .catch((e) => {
        console.log(e.toString());
        setArrivals(
          '[{"icao24":"Unknown","firstSeen":0,"estDepartureAirport":"Unknown","lastSeen":0,"estArrivalAirport":"Unknown","callsign":"No Callsign","estDepartureAirportHorizDistance":0,"estDepartureAirportVertDistance":0,"estArrivalAirportHorizDistance":0,"estArrivalAirportVertDistance":0,"departureAirportCandidatesCount":1,"arrivalAirportCandidatesCount":2}]'
        );
      });

    fetch(`/api/airport/departure/${airport}`)
      .then((response) => response.json())
      .then((responseData2) => {
        // console.log(responseData2);
        setDepartures(responseData2);
      })
      .catch((e) => {
        console.log(e.toString());
        setDepartures(
          '[{"icao24":"Unknown","firstSeen":0,"estDepartureAirport":"Unknown","lastSeen":0,"estArrivalAirport":"Unknown","callsign":"No Callsign","estDepartureAirportHorizDistance":0,"estDepartureAirportVertDistance":0,"estArrivalAirportHorizDistance":0,"estArrivalAirportVertDistance":0,"departureAirportCandidatesCount":1,"arrivalAirportCandidatesCount":2}]'
        );
      });
  }, []);

  var markr = null;

  let coords = [lat, lon];

  const data = {
    flightNumber: "BA009",
    fromAirport: "LHR",
    toAirport: "JFK",
    status: "En Route",
    altitude: "38,000 ft",
    groundSpeed: "566 mph",
    aircraftRegistration: "G-XWBA",
    airline: "British Airways",
    operator: "British Airways",
    hexCode: "40002C",
    aircraftType: "Boeing 747-400",
    imageSrc: "https://cdn.jetphotos.com/400/6/848871_1677779291.jpg",
  };
  return (
    <div className="bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="mt-24 text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            DLH2KH
          </h1>
          {/* add an image and center it  */}
          <div className="mt-6 flex justify-center">
            <div className="inline-flex rounded-md shadow">
              <img
                src="https://cdn.jetphotos.com/400/6/848871_1677779291.jpg"
                alt="Aircraft"
                className=""
              />
            </div>
          </div>
        </div>
        <div className="mt-16">
          <div className="grid">
            <div className="flex flex-col justify-between bg-gray-700 rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="mt-2 flex items-baseline">
                  <span className="text-2xl font-semibold text-white">
                    From Zurich International Airport To Vienna International
                    Airport
                  </span>
                </div>
              </div>
              <div className="bg-gray-600 px-6 py-16">
                <div className="bg-gray-900 text-white p-6 rounded-lg flex flex-col items-center">
                  <div className="flex items-center justify-center mb-4"></div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm">From</p>
                      <p className="text-xl font-bold">{data.fromAirport}</p>
                    </div>
                    <div>
                      <p className="text-sm">To</p>
                      <p className="text-xl font-bold">{data.toAirport}</p>
                    </div>
                    <div>
                      <p className="text-sm">Status</p>
                      <p className="text-xl font-bold">{data.status}</p>
                    </div>
                    <div>
                      <p className="text-sm">Altitude</p>
                      <p className="text-xl font-bold">{data.altitude}</p>
                    </div>
                    <div>
                      <p className="text-sm">Ground Speed</p>
                      <p className="text-xl font-bold">{data.groundSpeed}</p>
                    </div>
                    <div>
                      <p className="text-sm">Registration</p>
                      <p className="text-xl font-bold">
                        {data.aircraftRegistration}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm">Airline</p>
                      <p className="text-xl font-bold">{data.airline}</p>
                    </div>
                    <div>
                      <p className="text-sm">Operator</p>
                      <p className="text-xl font-bold">{data.operator}</p>
                    </div>
                    <div>
                      <p className="text-sm">Hex Code</p>
                      <p className="text-xl font-bold">{data.hexCode}</p>
                    </div>
                    <div>
                      <p className="text-sm">Aircraft Type</p>
                      <p className="text-xl font-bold">{data.aircraftType}</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <FaPlane size={24} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Airport;
