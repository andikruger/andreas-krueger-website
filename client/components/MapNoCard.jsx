import { useState, useEffect } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import WelcomeCard from "./WelcomeCard";
import BannerMessage from "./Banner";
import LoadingIndicator from "./Loader";
import { popupContent, popupHead, popupText, okText } from "../lib/popupStyles";
function InfoPopup(props) {
  const [planeImgSrc, setPlaneImgSrc] = useState(null);
  const [aircraftData, setAircraftData] = useState({
    ICAOTypeCode: "",
    Manufacturer: "Unknown",
    ModeS: "",
    OperatorFlagCode: "",
    RegisteredOwners: "Unknown",
    Registration: "",
    Type: "",
  });
  const [bl, setBl] = useState("");
  const [route, setRoute] = useState(" - ");
  useEffect(() => {
    fetch("https://hexdb.io/hex-image-thumb?hex=" + props.icao).then((r) => {
      r.text().then((d) => {
        setPlaneImgSrc("https:" + d);
      });
    });
    fetch(
      "https://hexdb.io/callsign-route-iata?callsign=" + props.callsign
    ).then((r) => {
      r.text().then((d) => {
        setRoute(d);
      });
    });
    fetch(`https://hexdb.io/api/v1/aircraft/` + props.icao)
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
        setAircraftData(responseData);
      })
      .catch((e) => {
        setAircraftData({
          ICAOTypeCode: "",
          Manufacturer: "Unknown",
          ModeS: "",
          OperatorFlagCode: "",
          RegisteredOwners: "Unknown",
          Registration: "",
          Type: "",
        });
      });
  }, []);

  return (
    <div>
      <strong>
        {aircraftData?.RegisteredOwners} {props.callsign}
      </strong>
      <br />
      <img
        style={{ width: "150px" }}
        src={planeImgSrc}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src = "./../aircrafttemp.png";
        }}
      />
      <p>
        <strong>{route}</strong>
        <br />
        <span className="text-muted">
          {aircraftData?.ICAOTypeCode} (Reg: {aircraftData?.Registration})
        </span>

        <br />
        <span className="text-muted">
          {Math.round(props.altitude * 3.2808)} ft,{" "}
          {Math.round((props.speed * 18) / 5)} Km/h
        </span>
        <br />
        <a href={"./../" + props.bl + "flight/hex-" + props.icao}>
          View flight
        </a>
      </p>
    </div>
  );
}
function Map() {
  const [planeImgSrc, setPlaneImgSrc] = useState(null);
  const [liveData, setliveData] = useState(null);
  const [filtered, setFiltered] = useState(false);
  const [filter, setFilter] = useState("");
  const [addedFilter, addFilter] = useState("");
  const [backLink, setBackLink] = useState("");

  useEffect(() => {
    if (typeof infoSlug !== "undefined") {
      if (infoSlug != null && infoSlug != "") {
        setFiltered(true);
        setFilter(infoSlug);
        addFilter(infoSlug);
        setBackLink("../");
      } else {
        setFiltered(false);
        setFilter("");
        addFilter("");
        setBackLink("");
      }
    } else {
      setFiltered(false);
      setFilter("");
      addFilter("");
      setBackLink("");
    }
  }, []);
  var fetchurl0 = `https://opensky-network.org/api/states/all`;

  useEffect(() => {
    fetch("/api/test/flight")
      .then((response) => response.json())
      .then((responseData2) => {
        if (responseData2.states[0][6] == null) {
          setliveData({
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
          setliveData[0]({
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
          setliveData(responseData2);
        }
      })
      .catch((e) => {
        setliveData({
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

  const [geoData, setGeoData] = useState({ lat: 47.751009, lng: 2.8068015 });

  const center = [geoData.lat, geoData.lng];

  return (
    <>
      <BannerMessage
        message={
          "Flight AK1302 is approaching. This Website is currently being worked on"
        }
      />
      <div className="z-40 absolute top-0 left-0 w-full"></div>
      <LoadingIndicator />
      <div className="z-10 absolute top-0 left-0 w-full">
        <MapContainer
          center={center}
          zoom={4.5}
          style={{ height: "100vh" }}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {liveData
            ? liveData?.states.map((stat, index) => {
                var lat = 100;
                var iconSize = 0;
                if (
                  stat[6] !== null &&
                  stat[6] !== undefined &&
                  stat[6] !== "undefined"
                ) {
                  iconSize = 24;
                  lat = stat[6];
                }
                var markr = null;

                if (
                  stat[1].toLowerCase().includes(filter.toLowerCase()) ||
                  !filtered
                ) {
                  var bl = "";
                  if (filtered) {
                    bl = "../";
                  }
                  return (
                    <Marker
                      position={[lat, stat[5]]}
                      zIndexOffset={Math.round(stat[7] * 3.2808)}
                      title={stat[1]}
                      icon={
                        new Icon({
                          iconUrl:
                            "./../directions/d" +
                            Math.floor((stat[10] + 23) / 45) * 45 +
                            ".png",
                          iconSize: [iconSize, iconSize],
                        })
                      }
                    >
                      <Popup>
                        {/* <div style={popupContent}> */}
                        <InfoPopup
                          icao={stat[0]}
                          callsign={stat[1]}
                          altitude={stat[7]}
                          speed={stat[9]}
                          bl={bl}
                        />
                        {/* </div> */}
                      </Popup>
                    </Marker>
                  );
                }
              })
            : null}
        </MapContainer>
      </div>
    </>
  );
}

export default Map;
