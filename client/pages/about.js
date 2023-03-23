import Head from "next/head";
import HeroSmall from "../components/Hero/HeroSmall";
import Image from "next/image";
import casper from "../assets/about/CasparGreef.jpg";
import bruce from "../assets/about/BruceClark.jpg";
import piet from "../assets/about/PietMahlangu.jpg";
import gordon from "../assets/about/GordonHowie.jpg";
import team from "../assets/about/Team.jpg";
import fordyce from "../assets/about/BruceFordyce.jpg";
import bob from "../assets/about/BobDeLaMotte.jpg";
import sonja from "../assets/about/SonjaLaxton.jpg";
import heroImg from "../assets/areal.jpg";
import Quote from "../components/Quote";
import AboutCardLeft from "../components/About/AboutCardLeft";
import AboutCardRight from "../components/About/AboutCardRight";

const About = () => {
  return (
    <>
      <Head>
        <title>About Us | Rand Athletic Club</title>
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
      <HeroSmall heading="About RAC" message="" image={heroImg} />
      <div className="bg-gray-200">
        {/* start */}
        <div className="">
          <h1 className="text-3xl font-bold text-center p-4 m-4 py-0">
            It started nearly 50 years ago, in September 1972
          </h1>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="w-full md:w-3/4 p-4 m-4">
            <p className="text-lg">
              Rand Athletic Club was founded in 1972 by a group of like-minded
              individuals who wanted to create a club that would cater for the
              needs of the community. The club was originally situated in the
              Rand Club in Randburg, hence the name Rand Athletic Club. The club
              was founded by a group of like-minded individuals who wanted to
              create a club that would cater for the needs of the community. The
              club was originally situated in the Rand Club in Randburg, hence
              the name Rand Athletic Club.
            </p>
          </div>
          <div className="md:w-1/4 p-4 m-4">
            <Image
              src={casper}
              alt="Casper Greef"
              width={300}
              height={300}
              className="rounded-lg"
            />
            <p className="text-center text-strong">
              Casper Greef – one of the founding members of RAC
            </p>
          </div>
        </div>
        {/* end */}

        {/* start */}
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="w-full md:w-3/4 p-4 m-4">
            <p className="text-lg">
              Initially, the young club battled to take off but after some hard
              work, membership began to increase. Little did they know at the
              time, that they would be creating a club that would become a
              pillar of the running community in decades to come. Fritz was
              idealistic, and set out the RAC founding statement:
            </p>
          </div>
        </div>
        {/* end */}
        <Quote text="What is available for one, must be available for all." />

        {/* start */}

        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="md:w-1/4 p-4 m-4">
            <Image
              src={bruce}
              alt="Bruce Clark"
              width={300}
              height={300}
              className="rounded-lg"
            />
            <p className="text-center text-strong">
              Bruce Clark picking up a badly cramping Richard Cohen some 40
              yards from the Comrades finishing line. They finished in time for
              both to win their 1997 Silver Medals.
            </p>
          </div>

          <div className="w-full md:w-3/4 p-4 m-4">
            <p className="text-lg">
              This simple tenet is the rock on which RAC was founded. As the new
              club grew, a particular ethos developed, one which is not found in
              many other running clubs. An ethos of WORKING TOGETHER to attain a
              common goal.
            </p>
          </div>
        </div>
        {/* end */}

        {/* start */}
        <div>
          <h1 className="text-3xl font-bold text-center p-4 m-4 py-0">
            RAC Running greats
          </h1>
        </div>
        <AboutCardLeft
          text="Piet Makola after winning the Veterans Competition at the Two Oceans 56km Ultra marathon in 1983"
          image={piet}
        />
        <AboutCardRight
          text="Gordon Howie (Sweatshop owner), Bob de la Motte after finishing second, 41 seconds behind Hosea Tjale in the 1984 Korkie, and Vreni Welch (secretary of RAC)."
          image={gordon}
        />
        <AboutCardLeft
          text="The RAC Team that won the Gunga-Din team competition in 1985.  Bruce Fordyce, Alan Day, Trevor Metcalffe and Tony Dearling. "
          image={team}
        />
        <AboutCardRight
          text="Bruce Fordyce’s 6th Comrades win in 1986 setting a new down run record of 5h24min"
          image={fordyce}
        />
        <AboutCardLeft
          text="Bob de la Motte winning the 1986 Peter Korkie 56km Ultra Marathon"
          image={bob}
        />
        <AboutCardRight
          text="Sonja Laxton was the first woman to be awarded triple Springbok colours for track, cross-country and road running.  In total Sonja won 23 SA titles (over 10 15, 21.1 and 42.2km), nine Masters titles and  a further 2 as a grandmaster"
          image={sonja}
        />
      </div>
    </>
  );
};

export default About;
