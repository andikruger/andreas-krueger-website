import React, { useEffect, useState } from "react";
import Router from "next/router";
import Image from "next/image";
import { FaPlane } from "react-icons/fa";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";

function StatusAlert(props) {
  var verb = "is";
  var statusColor = "secondary";
  var symbol = "¡";
  if (props.onGround == false) {
    verb = " is in the air";
    statusColor = "success";
    symbol = "✓";
  } else if (props.callSign == "No Callsign") {
    verb = " is not live";
    statusColor = "secondary";
    symbol = "🛈";
  } else if (props.onGround == true) {
    verb = "is on the ground";
    statusColor = "success";
    symbol = "✓";
  } else {
    verb = "s status is unknown";
    statusColor = "secondary d-none";
    symbol = "x";
  }
  var className = "alert alert-" + statusColor;
  return (
    <div className={className}>
      <strong>{symbol}</strong> This flight {verb}
    </div>
  );
}

function FlightInfo({ infoSlug }) {
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
  const [planeImgSrc, setPlaneImgSrc] = useState(null);
  const dataList = infoSlug;
  const inputCheck = dataList.split("-");
  const [liveData, setLiveData] = useState(null);
  const [origin, setOrigin] = useState(".");
  const [destination, setDestination] = useState(".");
  const [callSign, setCallSign] = useState("No Callsign");
  const [lat1, setLat1] = useState(0);
  const [lon1, setLon1] = useState(0);
  const [lat2, setLat2] = useState(0);
  const [lon2, setLon2] = useState(0);
  const [originData, setOriginData] = useState(
    '{"airport":"Unknown","country_code":"N/A","iata":"Unknown","icao":"Unknown","latitude":150,"longitude":10,"region_name":"Unknown"}'
  );
  const [destinationData, setDestinationData] = useState(
    '{"airport":"Unknown","country_code":"N/A","iata":"Unknown","icao":"Unknown","latitude":150,"longitude":10,"region_name":"Unknown"}'
  );
  var inputType = "";
  var hexCode = "";
  if (inputCheck[0] == "hex" && typeof inputCheck[1] !== "undefined") {
    inputType = "hex";
    hexCode = inputCheck[1];

    var fetchurl0 = "https://hexdb.io/hex-image-thumb?hex=" + hexCode;
    var fetchurl1 = `https://hexdb.io/api/v1/aircraft/` + hexCode;
    var fetchurl2 =
      `https://opensky-network.org/api/states/all?icao24=` + hexCode;
  }

  useEffect(() => {
    fetch(fetchurl0).then((r) => {
      r.text().then((d) => {
        setPlaneImgSrc("https:" + d);
      });
    });
    fetch(fetchurl1)
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
        setAircraftData(responseData);
      })
      .catch((e) => {
        console.log(e.toString());
      });
    fetch(fetchurl2)
      .then((response) => response.json())
      .then((responseData2) => {
        console.log(responseData2);
        if (responseData2.states[0][6] == null) {
          setLiveData({
            time: 1671324411,
            states: [
              [
                "",
                "No Callsign",
                "Unknown",
                1000000000,
                1000000000,
                0,
                0,
                0,
                true,
                0,
                0,
                0,
                null,
                0,
                null,
                false,
                0,
              ],
            ],
          });
        } else if (
          responseData2.states[0][8] !== true &&
          responseData2.states[0][8] !== false
        ) {
          setLiveData({
            time: 1671324411,
            states: [
              [
                "",
                "No Callsign",
                "Unknown",
                1000000000,
                1000000000,
                0,
                0,
                0,
                true,
                0,
                0,
                0,
                null,
                0,
                null,
                false,
                0,
              ],
            ],
          });
        } else {
          setLiveData(responseData2);
          fetch(
            "https://hexdb.io/callsign-route-iata?callsign=" +
              responseData2?.states[0][1]
          )
            .then((r) => {
              r.text().then((d) => {
                var ornden = d.split("-");
                var org = "Unknown";
                var dst = "Unknown";
                if (typeof ornden[0] !== "undefined") {
                  org = ornden[0];
                }
                if (typeof ornden[1] !== "undefined") {
                  dst = ornden[1];
                }
                setOrigin(org);
                setDestination(dst);

                fetch("https://hexdb.io/api/v1/airport/iata/" + org)
                  .then((response) => response.json())
                  .then((responseData3) => {
                    console.log(responseData3);
                    setOriginData(responseData3);
                    if (
                      typeof responseData3.latitude !== "undefined" &&
                      typeof responseData3.longitude !== "undefined"
                    ) {
                      setLat1(responseData3.latitude);
                      setLon1(responseData3.longitude);
                    }
                  })
                  .catch((e) => {
                    console.log(e.toString());
                    setOriginData(
                      '{"airport":"Unknown","country_code":"N/A","iata":"Unknown","icao":"Unknown","latitude":150,"longitude":20,"region_name":"Unknown"}'
                    );
                  });

                fetch("https://hexdb.io/api/v1/airport/iata/" + dst)
                  .then((response) => response.json())
                  .then((responseData4) => {
                    console.log(responseData4);
                    setDestinationData(responseData4);
                    if (
                      typeof responseData4.latitude !== "undefined" &&
                      typeof responseData4.longitude !== "undefined"
                    ) {
                      setLat2(responseData4.latitude);
                      setLon2(responseData4.longitude);
                    }
                  })
                  .catch((e) => {
                    console.log(e.toString());
                    setDestinationData(
                      '{"airport":"Unknown","country_code":"N/A","iata":"Unknown","icao":"Unknown","latitude":150,"longitude":20,"region_name":"Unknown"}'
                    );
                  });
              });
            })
            .catch((e) => {
              console.log(e.toString());
              setOrigin("Unknown");
              setDestination("Unknown");
            });

          // Refresh flight every 15 seconds
          const intervalRefresh = setInterval(() => {
            fetch(fetchurl2)
              .then((response) => response.json())
              .then((responseData2) => {
                console.log(responseData2);
                if (responseData2.states[0][6] == null) {
                  setLiveData({
                    time: 1671324411,
                    states: [
                      [
                        "",
                        "No Callsign",
                        "Unknown",
                        1000000000,
                        1000000000,
                        0,
                        0,
                        0,
                        true,
                        0,
                        0,
                        0,
                        null,
                        0,
                        null,
                        false,
                        0,
                      ],
                    ],
                  });
                } else if (
                  responseData2.states[0][8] !== true &&
                  responseData2.states[0][8] !== false
                ) {
                  setLiveData({
                    time: 1671324411,
                    states: [
                      [
                        "",
                        "No Callsign",
                        "Unknown",
                        1000000000,
                        1000000000,
                        0,
                        0,
                        0,
                        true,
                        0,
                        0,
                        0,
                        null,
                        0,
                        null,
                        false,
                        0,
                      ],
                    ],
                  });
                } else {
                  setLiveData(responseData2);
                }
              })
              .catch((e) => {
                console.log(e.toString());
                setLiveData({
                  time: 1671324411,
                  states: [
                    [
                      "",
                      "No Callsign",
                      "Unknown",
                      1000000000,
                      1000000000,
                      0,
                      0,
                      0,
                      true,
                      0,
                      0,
                      0,
                      null,
                      0,
                      null,
                      false,
                      0,
                    ],
                  ],
                });
              });
          }, 10000); // How often flight status refreshes in milliseconds, change to a smaller number if you want it to refresh more often

          return () => clearInterval(intervalRefresh);
        }
      })
      .catch((e) => {
        console.log(e.toString());
        setLiveData({
          time: 1671324411,
          states: [
            [
              "",
              "No Callsign",
              "Unknown",
              1000000000,
              1000000000,
              0,
              0,
              0,
              true,
              0,
              0,
              0,
              null,
              0,
              null,
              false,
              0,
            ],
          ],
        });
      });
  }, []);

  const customIcon = new Icon({
    iconUrl: "./../directions/d45.png",
    iconSize: [28, 28],
  });
  var size = 28;
  if (liveData?.states[0][1] == "No Callsign") {
    size = 0;
  }
  return (
    <div className="bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="mt-24 text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            <StatusAlert
              onGround={liveData?.states[0][8]}
              callSign={liveData?.states[0][1]}
            />
          </h1>
          {/* add an image and center it  */}
          <div className="mt-6 flex justify-center">
            <div className="inline-flex rounded-md shadow">
              <img src={planeImgSrc} alt="Aircraft" className="" />
            </div>
          </div>
        </div>
        <div className="mt-16">
          <div className="grid">
            <div className="flex flex-col justify-between bg-gray-700 rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="mt-2 flex items-baseline">
                  <span className="text-2xl font-semibold text-white">
                    From {originData.airport} To {destinationData.airport}
                  </span>
                </div>
              </div>
              <div className="bg-gray-600 px-6 py-16">
                <div className="bg-gray-900 text-white p-6 rounded-lg flex flex-col items-center">
                  <div className="flex items-center justify-center mb-4"></div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm">From</p>
                      <p className="text-xl font-bold">{origin}</p>
                    </div>
                    <div>
                      <p className="text-sm">To</p>
                      <p className="text-xl font-bold">{destination}</p>
                    </div>
                    <div>
                      <p className="text-sm">Status</p>
                      <p className="text-xl font-bold">En Route</p>
                    </div>
                    <div>
                      <p className="text-sm">Altitude</p>
                      <p className="text-xl font-bold">
                        {Math.round(liveData?.states[0][7] * 3.2808)} feet
                      </p>
                    </div>
                    <div>
                      <p className="text-sm">Ground Speed</p>
                      <p className="text-xl font-bold">
                        {Math.round((liveData?.states[0][9] * 18) / 5)} Km/h
                      </p>
                    </div>
                    <div>
                      <p className="text-sm">Registration</p>
                      <p className="text-xl font-bold">
                        {aircraftData?.Registration}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm">Airline</p>
                      <p className="text-xl font-bold">
                        {aircraftData?.RegisteredOwners}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm">Operator</p>
                      <p className="text-xl font-bold">
                        {aircraftData?.OperatorFlagCode}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm">Hex Code</p>
                      <p className="text-xl font-bold">{aircraftData?.ModeS}</p>
                    </div>
                    <div>
                      <p className="text-sm">Aircraft Type</p>
                      <p className="text-xl font-bold">
                        {aircraftData?.Manufacturer}
                      </p>
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

export default FlightInfo;
