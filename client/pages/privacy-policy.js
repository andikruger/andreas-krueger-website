import Head from "next/head";
import HeroSmall from "../components/Hero/HeroSmall";
import heroImg from "../assets/clubhouse.jpg";

const Privacy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy | Rand Athletic Club</title>
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
      <HeroSmall heading="Privacy Policy" message="" image={heroImg} />

      <div>
        <h1 className="text-2xl font-bold text-center p-4 m-4 py-0">
          The "POPIA" Act. (Protection of Personal Information Act, No.4 of
          2013)
        </h1>
      </div>
      {/* create a text section with styling */}
      <div className="flex flex-col items-center p-4">
        <p className="text-lg text-gray-900  text-center p-4 py-0">
          The Rand Athletic Club (RAC) is obliged to comply with the above Act.
          We now require members consent for the Club to use and store their
          Personal information on the Club Data Base.
          <br />
          <br />
          <b>The Personal Information we keep is:</b>
        </p>
        <ul className="list-disc list-inside text-center">
          <li>First name</li>
          <li>Last Name</li>
          <li>Mobile Phone Number </li>
          <li>Subscriptions paid or due</li>
          <li>ID Number</li>
          <li>Email Number</li>
          <li>License Number</li>
          <li>Date of Joining the Club</li>
        </ul>
        <p className="text-lg text-gray-900  text-center p-4 py-0">
          <br />
          <br />
          This information is updated, where necessary, on receipt of the
          Members annual Licence Renewal Form. The licence renewal form is
          relayed to our Provincial office for transfer to the National Athletic
          Parent body who in turn use it to update the Athlete Insurance Policy
          and their own records. RAC use the members personal addresses to
          publish communications such as the NewsFlash and other relevant
          information via the Internet or posts on Social Media pages like
          Facebook, Instagram and Twitter. Members photographs are, at times,
          also included in these communications.
          <br />
          <br />
          If you do NOT wish to continue receiving our communications, please
          inform RAC of your wishes. This you can do by mailing:
          randathletic@iafrica.com If no message to the contrary is received, we
          will assume that you DO wish to continue receiving our communications.
          If you are a non member and are currently receiving communications
          from RAC please would you confirm ifyou wish to continue receiving
          them. Do this by mailing your request to:{" "}
          <a href="mailto:randathletic@iafrica.com">
            {" "}
            randathletic@iafrica.com
          </a>
          <br />
          <br />
          RAC is obliged to delete any information for which we have not been
          given permission to keep. The information RAC does retain is never
          sold. It is used exclusively for the administration of the Club, the
          dissemination of information and the verification of members ages and
          status.
          <br />
          <br />
          Thank you for your cooperation. Dick Welch, Chairman RAC.
        </p>
      </div>
    </>
  );
};

export default Privacy;
