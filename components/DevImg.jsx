import Image from "next/image";

const DevImg = ({ containerStyles, imgSrc, width, height }) => {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgSrc} width={width} height={height} priority alt="" />
    </div>
  );
};

export default DevImg;
