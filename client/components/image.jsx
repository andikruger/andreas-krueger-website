import NextImage from "next/image";
const Image = () => {
  // const { alternativeText, width, height } = image.data.attributes;

  return (
    <NextImage
      layout="responsive"
      width={300}
      height={300}
      objectFit="contain"
      src={`https://images.unsplash.com/photo-1486218119243-13883505764c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80`}
      alt={alternativeText || "Alternative text"}
    />
  );
};
