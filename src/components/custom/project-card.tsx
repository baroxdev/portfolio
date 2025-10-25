"use client";

import Image from "next/image";
import React, { useEffect, useMemo, useRef } from "react";
import { FastAverageColor } from "fast-average-color";

export type Project = {
  title: string;
  description: string;
  assets: {
    image: {
      url: string;
    };
    video?: {
      url: string;
    };
  };
  metadata: {
    primaryColor: string;
    secondaryColor: string;
  };
};

type Props = {
  project: Project;
  index?: number;
};

export const ProjectCardDynamicCover = ({
  project,
  hovered,
}: Props & { hovered: boolean }) => {
  const [, setImageStatus] = React.useState<"idle" | "loading" | "loaded">(
    "idle"
  );

  return (
    <div className="size-full bg-neutral-300 object-cover">
      {!hovered ? (
        <Image
          onLoad={() => {
            setImageStatus("loaded");
          }}
          className="w-full h-full project-cover-image object-cover"
          // random image from unsplash
          src={project.assets.image.url}
          width={1140}
          height={737}
          quality={100}
          fetchPriority="high"
          alt="projects"
        />
      ) : (
        // <div className="bg-radial size-full flex items-center from-blue-900 p-8 to-transparent">
        //   <AspectRatio ratio={16 / 9} className="rounded-lg overflow-hidden">
        <>
          {project.assets.video && (
            <video
              src={project.assets.video.url}
              autoPlay
              loop
              muted
              className="w-full h-full object-cover"
            ></video>
          )}
        </>
        //   </AspectRatio>
        // </div>
      )}
    </div>
  );
};

export const ProjectCard = ({ project }: Props) => {
  const ref = useRef(null);
  const [dominantColor, setDominantColor] = React.useState<string | null>(null);
  const [isHovered, setIsHovered] = React.useState(false);

  const fac = useMemo(() => new FastAverageColor(), []);
  useEffect(() => {
    fac
      .getColorAsync(project.assets.image.url)
      .then((color) => setDominantColor(color.hex));
  }, [fac, project]);

  return (
    <div
      ref={ref}
      data-slot={"card"}
      className="will-change-auto group  transition-all relative cursor-pointer"
      onMouseEnter={() => {
        if (project.assets.video) setIsHovered(true);
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        data-slot="card-cover"
        className="max-md:aspect-[260/314] relative group-hover:translate-y-1 rounded-xl group-hover:px-10 group-hover:pt-10 overflow-hidden aspect-[696/450] transition-all"
        style={
          {
            backgroundColor: dominantColor,
          } as React.CSSProperties
        }
      >
        <div className="group-hover:rounded-t-xl overflow-hidden transition-all group-hover:mt-3 group-hover:shadow-xl">
          <ProjectCardDynamicCover hovered={isHovered} project={project} />
        </div>
      </div>
      <div className="">
        <div className="px-[15px] max-md:py-6 w-full mt-auto pb-5 pt-8">
          <div className="max-w-[80%] max-md:text-sm text-base text-neutral-400 font-medium">
            <span className="text-neutral-900 font-bold">{project.title}</span>,
            {project.description}
          </div>
        </div>
      </div>
    </div>
  );
};
