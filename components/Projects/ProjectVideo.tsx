"use client";

import React, { memo } from "react";
import Image from "next/image";

type ProjectVideoProps = {
  title: string;
  image?: {
    main?: { src: string; width?: number; height?: number };
    mp4?: string;
    webm?: string;
  };
};

const ProjectVideo = ({ title, image }: ProjectVideoProps) => {
  const [hasMounted, setHasMounted] = React.useState<boolean>(false);

  React.useEffect(() => setHasMounted(true), []);

  if (image !== undefined)
    return (
      <div className="order-first">
        {image.main && (
          <Image
            src={image?.main.src}
            alt={`${title} image`}
            width={image?.main.width}
            height={image?.main.height}
            className="mx-auto rounded-lg shadow-lg"
            sizes="(max-width: 960px) 90vw, 40vw"
            aria-label="Project image"
          />
        )}
        {hasMounted && image.mp4 && (
          <video
            autoPlay
            playsInline
            loop
            preload="auto"
            muted
            controls
            width={300}
            height={300}
            className="mx-auto w-full rounded-lg shadow-lg"
          >
            <source src={image?.mp4} type="video/mp4" />
          </video>
        )}
      </div>
    );
};

export default memo(ProjectVideo);
