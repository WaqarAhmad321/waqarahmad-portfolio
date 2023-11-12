import { TechIconsProps } from "@/lib/types";
import Image from "next/image";

const TechIcons = ({ label, src, width, height }: TechIconsProps) => {
  return (
    <div className="m-2 flex flex-col items-center">
      <p className="mb-2 mt-2 whitespace-nowrap text-sm">
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
