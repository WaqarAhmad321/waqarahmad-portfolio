"use client";

import React from "react";

import Image from "next/image";

type ProjectVideoProps = {
  title: string;
  image?: {
    main?: { src: string; width?: number; height?: number };
    mp4?: string;
    webm?: string;
    poster?: string;
    vidHeight?: number;
    vidWidth?: number;
  };
};

const ProjectVideo = ({ title, image }: ProjectVideoProps) => {
  return (
    <div className="order-first">
      {image?.main && (
        <Image
          src={image?.main.src}
          alt={`${title} image`}
          width={image?.main.width}
          height={image?.main.height}
          className="mx-auto h-full w-full rounded-lg shadow-lg"
        />
      )}
      {image?.mp4 && (
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

export default ProjectVideo;
