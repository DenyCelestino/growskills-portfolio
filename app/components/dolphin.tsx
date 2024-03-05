import Image from "next/image";
import DolphinImage from "../images/dolphin.png";

const Dolphin = () => {
  return (
    <div className="dolphin">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <Image src={DolphinImage} width={500} height={300} alt="" />
    </div>
  );
};

export default Dolphin;
