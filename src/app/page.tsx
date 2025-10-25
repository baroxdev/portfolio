import { ProjectCard } from "@/components/custom/project-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DEFAULT_PROJECTS } from "@/lib/constants";
import { Briefcase, Download, Mail, MapPin, ShieldCheck } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import React from "react";
import { SocialIcon } from "react-social-icons";

export const metadata: Metadata = {
  title: "Bao Phan — Software Engineer",
  description:
    "Bao Phan — Software engineer based in Ho Chi Minh City. Building high-quality web applications with a focus on frontend engineering and problem solving.",
  openGraph: {
    title: "Bao Phan — Software Engineer",
    description:
      "Portfolio of Bao Phan — frontend & fullstack software engineer based in Ho Chi Minh City. View projects, experiences and contact information.",
    type: "website",
    images: ["/file.svg"],
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// JSON-LD structured data for better search results (Person + WebSite)
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "Bao Phan",
      url: "https://portfolio.barox.site",
      jobTitle: "Software Engineer",
      description:
        "Frontend & Fullstack engineer based in Ho Chi Minh City. Focused on building performant, accessible, and maintainable web applications.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ho Chi Minh",
        addressCountry: "VN",
      },
      sameAs: [
        "https://github.com/baophan",
        "https://www.linkedin.com/in/baophan",
      ],
    },
    {
      "@type": "WebSite",
      url: "https://portfolio.barox.site",
      name: "Bao Phan — Portfolio",
      description:
        "Portfolio of Bao Phan — frontend & fullstack software engineer based in Ho Chi Minh City.",
    },
  ],
};

export default function Home() {
  return (
    <main className="min-h-screen relative bg-white">
      {/* Insert JSON-LD so crawlers can read structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="absolute max-md:relative top-0 left-0 right-0 z-[2] h-[266px] bg-neutral-300">
        {/* <Image
          src="/assets/images/wallpaper.svg"
          width={1440}
          height={266}
          alt="Wall paper"
          className="w-full h-full object-cover z-[3]"
        /> */}
      </div>
      <div className="z-[3] relative">
        <div className="px-5 pt-5 md:px-20 md:pt-20 mb-5 md:pb-20 min-h-screen max-md:rounded-t-xl max-md:bg-white shadow-xl max-md:mt-[-20px] flex max-md:flex-col gap-4 md:gap-8">
          <div
            data-slot="profile-sidebar"
            className="md:max-w-[300px] w-full md:mt-[120px] space-y-5"
          >
            <div className="space-y-5">
              <div data-slot="profile-header" className="space-y-3">
                <Avatar className="size-28 bg-neutral-300 border-2 border-white max-md:mt-[-93px] max-md:mx-auto">
                  <AvatarImage src="/assets/images/avatar.png" alt="Bao Phan" />
                  <AvatarFallback>BP</AvatarFallback>
                </Avatar>
                <h2 className="text-neutral-900 text-center md:text-left font-bold text-xl">
                  Bao Phan
                </h2>
                <ul className="list-none text-xs text-neutral-600 ">
                  <li className="py-1 flex items-center gap-1 max-md:justify-center">
                    <Briefcase size={16} />
                    Software Engineer
                  </li>
                  <li className="py-1 flex items-center gap-1 max-md:justify-center">
                    <ShieldCheck size={16} /> Available for work
                  </li>
                  <li className="py-1 flex items-center gap-1 max-md:justify-center">
                    <MapPin size={16} />
                    Ho Chi Minh, Viet Nam
                  </li>
                </ul>
                <div data-slot="button-group" className="flex flex-col gap-2">
                  <Button>
                    <Mail /> Contact me
                  </Button>
                  <Button variant="outline">
                    <Download />
                    My Resume
                  </Button>
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="text-xs uppercase font-medium text-neutral-900">
                  Short description
                </h3>
                <p className="text-neutral-600 text-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                  explicabo debitis dolorum, minus corporis aliquam quisquam
                </p>
              </div>
              <div className="space-y-1">
                <h3 className="text-xs uppercase font-medium text-neutral-900">
                  On the web
                </h3>
                <ul className="list-none space-y-1">
                  <li>
                    <a
                      href="https://linkedin.com/in/phan-quoc-bao"
                      className="flex items-center underline gap-2 text-xs"
                    >
                      <SocialIcon
                        network="linkedin"
                        style={{
                          width: 24,
                          height: 24,
                        }}
                      />
                      <div className="flex items-center gap-1">
                        <span>linkedin.com/in/phan-quoc-bao</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/baroxdev"
                      className="flex items-center underline gap-2 text-xs"
                    >
                      <SocialIcon
                        network="github"
                        style={{
                          width: 24,
                          height: 24,
                        }}
                      />
                      <div className="flex items-center gap-1">
                        <span>github.com/baroxdev</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://x.com/9B2rk"
                      className="flex items-center underline gap-2 text-xs"
                    >
                      <SocialIcon
                        network="x"
                        style={{
                          width: 24,
                          height: 24,
                        }}
                      />
                      <div className="flex items-center gap-1">
                        <span>x.com/9B2rk</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            data-slot="profile-contents"
            className="flex-1 md:mt-[186px] md:pt-20"
          >
            <Tabs defaultValue="projects">
              <TabsList>
                <TabsTrigger value="projects">Projects</TabsTrigger>
                {/* <TabsTrigger value="about">About</TabsTrigger> */}
                {/* <TabsTrigger value="experiences">Experiences</TabsTrigger> */}
              </TabsList>
              <TabsContent value="projects">
                <div className="grid grid-cols-2 max-md:grid-cols-1 gap-5">
                  {DEFAULT_PROJECTS.map((project, index) => {
                    return (
                      <ProjectCard
                        index={index}
                        project={project}
                        key={index}
                      />
                    );
                  })}
                </div>
              </TabsContent>
              <TabsContent value="about">this is about</TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </main>
  );
}
