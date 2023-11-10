import { TechIconsProps } from "@/lib";
import Image from "next/image";

const TechIcons = ({ label, src, width, height }: TechIconsProps) => {
  return (
    <div className="m-2 flex flex-col items-center">
      <p className="font-extrathin mb-2 mt-2 whitespace-nowrap text-sm text-light-grey">
        {label}
      </p>
      <Image
        src={src}
        alt={`${label} icon`}
        width={width}
        height={height}
        className="duration-100 ease-out hover:scale-125"
      />
    </div>
  );
};

export default TechIcons;
