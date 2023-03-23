import Head from "next/head";
import HeroSmall from "../components/Hero/HeroSmall";
import ContactForm from "../components/Contact/Contact";
import heroImg from "../assets/clubhouse.jpg";
import Link from "next/link";
const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Us | Rand Athletic Club</title>
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
      <HeroSmall heading="Get hold of us" message="" image={heroImg} />

      <div>
        <h1 className="text-2xl font-bold text-center p-4 m-4 py-0 rac-colour">
          Our Contact Details
        </h1>
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-xl font-bold text-center p-4 m-4 py-0">
              Vreni Welch
            </h2>
            <p className="text-lg font-bold text-center p-4 m-4 py-0">
              <a className="rac-colour hover" href="tel:+27114428256">
                {" "}
                Tel: 011 442 8256
              </a>
            </p>
            <p className="text-lg font-bold text-center p-4 m-4 py-0 rac-colour">
              Email:{" "}
              <a
                href="mailto:randathletic@iafrica.com
                "
                className="hover rac-colour"
              >
                randathletic@iafrica.com
              </a>
            </p>
            {/* phisical address */}
            <p className="text-lg font-bold text-center p-4 m-4 py-0 rac-colour">
              Address: 1 Garden Road Bordeaux Johannesburg 2194
            </p>

            {/* google map */}
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.6823478764945!2d28.016354315101506!3d-26.109285966462213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9574a9d5760a8b%3A0x33736db6b8547d53!2s1%20Garden%20Rd%2C%20Bordeaux%2C%20Johannesburg%2C%202194%2C%20S%C3%BCdafrika!5e0!3m2!1sde!2sat!4v1668080577385!5m2!1sde!2sat"
            width="100%"
            height="450"
            style={{ border: 0, borderRadius: "1rem" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      {/* <ContactForm /> */}
    </>
  );
};

export default Contact;
