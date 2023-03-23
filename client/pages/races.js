import Head from "next/head";
import { useState, useEffect } from "react";
import HeroSmall from "../components/Hero/HeroSmall";
import ContactForm from "../components/Contact/Contact";
import heroImg from "../assets/toughone22.jpg";

import Calendar from "../components/Calandar";
const Races = () => {
  const [data, setData] = useState([]);
  const [isDataSet, setIsDataSet] = useState(false);
  const [clubruns, setClubruns] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      "https://yavqngwf.api.sanity.io/v1/data/query/production?query=*%5B_type%20%3D%3D%20%22race%22%5D"
    );
    const result = await response.json();

    const dateObj = result.result.map((item) => {
      // auto increment the id
      // set endtime to 1 hour after start time

      let endTime = new Date(item.startTime);
      endTime.setHours(endTime.getHours() + 3);
      console.log(item.name);

      return {
        // id auto increments
        Id: item._id,
        Subject: item.name,
        StartTime: item.startTime,
        EndTime: endTime,
        IsAllDay: false,
        CategoryColor: "#67162c",
        Location: item.venue,
        Description: `You can get more information on the <a class="hover rac-colour text-bold" href="/race/${item.slug.current}" target="_blank">Race Page</a>`,
      };
    });

    setData(dateObj);
  };
  const fetchClubRuns = async () => {
    const response = await fetch(
      "https://yavqngwf.api.sanity.io/v1/data/query/production?query=*%5B_type%20%3D%3D%20%22clubrun%22%5D"
    );
    const result = await response.json();

    const dateObj = result.result.map((item) => {
      // auto increment the id
      // set endtime to 1 hour after start time

      let endTime = new Date(item.time[0]);
      endTime.setHours(endTime.getHours() + 3);

      return {
        // id auto increments
        Id: item._id,
        Subject: item.name,
        StartTime: item.time[0],
        EndTime: endTime,
        IsAllDay: false,
        CategoryColor: "#246635",
        Location: item.name,
        Description: `You can view the map on the <a class="hover rac-colour text-bold" href="/clubactivities/clubruns/${item.slug.current}" target="_blank">Clubrun Page</a>`,
      };
    });

    setClubruns(dateObj);
  };
  // check if a logout vallue is in session storage
  useEffect(() => {
    if (!isDataSet) {
      fetchData();
      fetchClubRuns();
      setIsDataSet(true);
    }
  }, []);

  let temp = [...data, ...clubruns];

  return (
    <>
      <Head>
        <title>Races | Rand Athletic Club</title>
        <meta
          name="description"
          content="Created as template for future work"
        />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <HeroSmall heading="Races through the year" message="" image={heroImg} />
      <div className="flex flex-col items-center justify-center p-4">
        {<Calendar data={temp} />}
      </div>
    </>
  );
};

export default Races;
