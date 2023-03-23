import react from "react";
import moment from "moment";

const WelcomeCard = () => {
  // use to get the current timezone offset +/- UTC
  let timezone = moment().format("Z");
  // remove the leading 0 from the timezone offset and add a colon
  timezone = timezone.replace(":00", "");
  console.log(timezone);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 absolute top-20 pb-6 left-6 md:w-1/5 md:left-1/6">
      <h1 className="text-3xl font-bold mb-2">
        AK1302 <span className="text-xl mb-2">/ AND13AC</span>
      </h1>

      <img
        src="https://static1.simpleflyingimages.com/wordpress/wp-content/uploads/2021/05/South-African-Airways-Airbus-A350-900-ZS-SOC-scaled.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5"
        alt="Flight Image"
        className="w-full mb-4 rounded-lg"
      />
      {/* Add  */}
      <p className="text-4xl">JNB &rarr; VIE</p>
      <p className="text-md">Johannesburg &rarr; Vienna</p>
      <div className="pb-4"></div>

      {/* create a table with four cells to add the details Scheduled departure, Actual departure on the left and scheduled arrival and estimated arrival on the right */}
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Operator</th>
            <th className="px-4 py-2">Registered Country</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">Andreas Krüger</td>
            <td className="border px-4 py-2">
              AUT/ZAF
              {/* add the zaf and aut flag underneath */}
              <span className="inline-block h-6 w-6">
                <img
                  className="h-full w-full object-cover"
                  src="https://flagsapi.com/AT/flat/64.png"
                  alt="South Africa"
                />
                {/* add padding */}
              </span>
              <span className="inline-block h-6 w-6">
                <img
                  className="h-full w-full object-cover"
                  src="https://flagsapi.com/ZA/flat/64.png"
                  alt="South Africa"
                />
              </span>
            </td>
          </tr>
        </tbody>
      </table>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Scheduled Departure</th>
            <th className="px-4 py-2">Estimated Arrival</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">
              19:25 <span className="text-xs">UTC+02</span>
            </td>
            <td className="border px-4 py-2">
              06:05<span className="text-xs"> UTC{timezone}</span>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="pb-4"></div>
      <div className="flex justify-between">
        <div className="flex flex-col">
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">Aircraft</th>
                <th className="px-4 py-2">Registration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Airbus A359</td>
                <td className="border px-4 py-2">ZS-GAT</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default WelcomeCard;
