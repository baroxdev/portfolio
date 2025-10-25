"use client";

import Image from "next/image";
import React, { useEffect, useMemo, useRef } from "react";
import { FastAverageColor } from "fast-average-color";
import Link from "next/link";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

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
    url?: string;
    primaryColor: string;
    secondaryColor: string;
  };
};

type Props = {
  project: Project;
  index?: number;
};

type Status = "idle" | "loading" | "loaded";

export const ProjectCardDynamicCover = ({
  project,
  hovered,
}: Props & { hovered: boolean }) => {
  const [, setImageStatus] = React.useState<Status>("idle");
  const [videoStatus, setVideoStatus] = React.useState<Status>("idle");

  return (
    <div className="size-full relative bg-neutral-300 object-cover">
      <Image
        onLoad={() => {
          setImageStatus("loaded");
        }}
        className={cn(
          "w-full h-full project-cover-image object-cover relative z-[2]",
          {}
        )}
        // random image from unsplash
        src={project.assets.image.url}
        width={1140}
        height={737}
        quality={80}
        fetchPriority="high"
        alt="projects"
      />
      <>
        {project.assets.video && (
          <div className="w-full h-full bg-neutral-200">
            <video
              key={hovered ? "active" : "inactive"}
              src={project.assets.video.url}
              autoPlay
              preload="auto"
              loop
              onLoad={() => setVideoStatus("loaded")}
              muted
              className={cn(
                "w-full transition-all absolute inset-0 h-full object-cover",
                {
                  "z-[3] opacity-100": hovered,
                  "z-[1] opacity-0": !hovered,
                }
              )}
            >
              <source src={project.assets.video.url} type="webp" />
            </video>
          </div>
        )}
      </>
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

  const Comp = project?.metadata?.url ? Link : Slot;

  return (
    <Comp href={project.metadata?.url ?? ""} target="_blank">
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
          className=" relative group-hover:translate-y-1 rounded-xl group-hover:px-10 group-hover:pt-10 overflow-hidden aspect-[696/450] transition-all"
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
              <span className="text-neutral-900 font-bold">
                {project.title}
              </span>
              ,{project.description}
            </div>
          </div>
        </div>
      </div>
    </Comp>
  );
};
