import React from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
const FlightNoSSR = dynamic(() => import("../../components/Flight"), {
  ssr: false,
});
const Flight = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      <FlightNoSSR infoSlug={slug} />
    </>
  );
};

export default Flight;
