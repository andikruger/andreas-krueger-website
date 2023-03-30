import React, { useEffect, useState } from "react";
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
  return (
    <div className="bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="mt-24 text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            {airportData.airport}
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
            ICAO: {airportData.icao} | IATA: {airportData.iata}
          </p>
        </div>
        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="flex flex-col justify-between bg-gray-700 rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-lg font-medium text-white">Coordinates</h2>
                <div className="mt-2 flex items-baseline">
                  <span className="text-2xl font-semibold text-white">
                    {airportData.latitude}, {airportData.longitude}
                  </span>
                </div>
              </div>
              <div className="bg-gray-600 px-6 py-16">
                <AirportMap airport={airportData} />
              </div>
            </div>
            <div className="flex flex-col justify-between bg-gray-50 dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-lg font-medium text-gray-900 dark:text-white">
                  Arrivals
                </h2>
                <div className="mt-2">
                  {/* {arrivals.length === 0 ? (
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      No arrivals available.
                    </p>
                  ) : (
                    <table className="table-auto w-full">
                      <thead>
                        <tr>
                          <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400">
                            Call Sign
                          </th>
                          <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400">
                            From
                          </th>
                          <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400">
                            Estimated Departure
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {arrivals.map((arrival) => (
                          <tr key={arrival.callSign}>
                            <td className="border px-4 py-2 text-sm font-medium text-gray-900 dark:text-white">
                              {arrival.callSign.replace(/_/g, " ")}
                            </td>
                            <td className="border px-4 py-2 text-sm text-gray-500 dark:text-gray-400">
                              {arrival.from}
                            </td>
                            <td className="border px-4 py-2 text-sm text-gray-500 dark:text-gray-400">
                              {arrival.estimatedDeparture}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )} */}
                  <table className="table-auto w-full">
                    <thead>
                      <tr>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400">
                          Call Sign
                        </th>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400">
                          From
                        </th>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400">
                          Estimated Departure
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border px-4 py-2 text-sm font-medium text-gray-900 dark:text-white">
                          UAE126
                        </td>
                        <td className="border px-4 py-2 text-sm text-gray-500 dark:text-gray-400">
                          DXB
                        </td>
                        <td className="border px-4 py-2 text-sm text-gray-500 dark:text-gray-400">
                          2023/03/28 12:00:00
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2 text-sm font-medium text-gray-900 dark:text-white">
                          UAE126
                        </td>
                        <td className="border px-4 py-2 text-sm text-gray-500 dark:text-gray-400">
                          DXB
                        </td>
                        <td className="border px-4 py-2 text-sm text-gray-500 dark:text-gray-400">
                          2023/03/28 12:00:00
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2 text-sm font-medium text-gray-900 dark:text-white">
                          UAE126
                        </td>
                        <td className="border px-4 py-2 text-sm text-gray-500 dark:text-gray-400">
                          DXB
                        </td>
                        <td className="border px-4 py-2 text-sm text-gray-500 dark:text-gray-400">
                          2023/03/28 12:00:00
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2 text-sm font-medium text-gray-900 dark:text-white">
                          UAE126
                        </td>
                        <td className="border px-4 py-2 text-sm text-gray-500 dark:text-gray-400">
                          DXB
                        </td>
                        <td className="border px-4 py-2 text-sm text-gray-500 dark:text-gray-400">
                          2023/03/28 12:00:00
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2 text-sm font-medium text-gray-900 dark:text-white">
                          UAE126
                        </td>
                        <td className="border px-4 py-2 text-sm text-gray-500 dark:text-gray-400">
                          DXB
                        </td>
                        <td className="border px-4 py-2 text-sm text-gray-500 dark:text-gray-400">
                          2023/03/28 12:00:00
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="bg-gray-100 dark:bg-gray-600 px-6 py-4">
                <h2 className="text-lg font-medium text-gray-900 dark:text-white">
                  Departures
                </h2>
                <div className="mt-2">
                  {/* {departures.length === 0 ? (
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      No departures available.
                    </p>
                  ) : (
                    <table className="table-auto w-full">
                      <thead>
                        <tr>
                          <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400">
                            Call Sign
                          </th>
                          <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400">
                            To
                          </th>
                          <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400">
                            Estimated Arrival
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {departures.map((departure) => (
                          <tr key={departure.callSign}>
                            <td className="border px-4 py-2 text-sm font-medium text-gray-900 dark:text-white">
                              {departure.callSign.replace(/_/g, " ")}
                            </td>
                            <td className="border px-4 py-2 text-sm text-gray-500 dark:text-gray-400">
                              {departure.to}
                            </td>
                            <td className="border px-4 py-2 text-sm text-gray-500 dark:text-gray-400">
                              {departure.estimatedArrival}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )} */}
                  <table className="table-auto w-full">
                    <thead>
                      <tr>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400">
                          Call Sign
                        </th>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400">
                          To
                        </th>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400">
                          Estimated Arrival
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border px-4 py-2 text-sm font-medium text-gray-900 dark:text-white">
                          AUA069
                        </td>
                        <td className="border px-4 py-2 text-sm text-gray-500 dark:text-gray-400">
                          MRU
                        </td>
                        <td className="border px-4 py-2 text-sm text-gray-500 dark:text-gray-400">
                          2023/03/28 12:00:00
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2 text-sm font-medium text-gray-900 dark:text-white">
                          AUA069
                        </td>
                        <td className="border px-4 py-2 text-sm text-gray-500 dark:text-gray-400">
                          MRU
                        </td>
                        <td className="border px-4 py-2 text-sm text-gray-500 dark:text-gray-400">
                          2023/03/28 12:00:00
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2 text-sm font-medium text-gray-900 dark:text-white">
                          AUA069
                        </td>
                        <td className="border px-4 py-2 text-sm text-gray-500 dark:text-gray-400">
                          MRU
                        </td>
                        <td className="border px-4 py-2 text-sm text-gray-500 dark:text-gray-400">
                          2023/03/28 12:00:00
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2 text-sm font-medium text-gray-900 dark:text-white">
                          AUA069
                        </td>
                        <td className="border px-4 py-2 text-sm text-gray-500 dark:text-gray-400">
                          MRU
                        </td>
                        <td className="border px-4 py-2 text-sm text-gray-500 dark:text-gray-400">
                          2023/03/28 12:00:00
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2 text-sm font-medium text-gray-900 dark:text-white">
                          AUA069
                        </td>
                        <td className="border px-4 py-2 text-sm text-gray-500 dark:text-gray-400">
                          MRU
                        </td>
                        <td className="border px-4 py-2 text-sm text-gray-500 dark:text-gray-400">
                          2023/03/28 12:00:00
                        </td>
                      </tr>
                    </tbody>
                  </table>
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
