import {Button} from "@/components/ui/button";
import React from "react";
import {cn} from "@/lib/utils";
import type {Metadata} from "next";

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

const Section: React.FC<
    React.ComponentPropsWithoutRef<'section'> & {
    fluid?: boolean
}
> = ({children, className, fluid = false}) => {
    return <section className={cn(' max-md:py-10 py-20 w-full', {
        'container': !fluid
    }, className)}>
        {children}
    </section>
}

const SectionHeading: React.FC<React.ComponentPropsWithoutRef<"h2">> = ({children, className, ...props}) => {
    return <h2
        className={cn("max-md:text-3xl text-neutral-900 max-md:mb-12 mb-16 font-bold text-6xl", className)} {...props}>
        {children}
    </h2>
}

// JSON-LD structured data for better search results (Person + WebSite)
const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Person",
            "name": "Bao Phan",
            "url": "https://portfolio.barox.site",
            "jobTitle": "Software Engineer",
            "description": "Frontend & Fullstack engineer based in Ho Chi Minh City. Focused on building performant, accessible, and maintainable web applications.",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Ho Chi Minh",
                "addressCountry": "VN"
            },
            "sameAs": [
                "https://github.com/baophan",
                "https://www.linkedin.com/in/baophan"
            ]
        },
        {
            "@type": "WebSite",
            "url": "https://portfolio.barox.site",
            "name": "Bao Phan — Portfolio",
            "description": "Portfolio of Bao Phan — frontend & fullstack software engineer based in Ho Chi Minh City.",
        }
    ]
};

export default function Home() {
    return (
        <main>
            {/* Insert JSON-LD so crawlers can read structured data */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}/>

            <Section>
                <div className="flex max-md:gap-5 justify-between max-md:flex-col max-md:items-start items-end">
                    <div className="max-md:space-y-3 space-y-5">
                        <p className="max-md:text-xl text-2xl">
                            <span>
                                Hi, I&#39;m Bao Phan,
                            </span>
                        </p>
                        <h1 className="font-bold max-md:text-4xl text-5xl">
            <span>
                A Software Engineer
            </span>
                        </h1>
                        <p className='text-neutral-600 text-base max-md:text-xs'>
            <span className=''>
                Lorem ipsum dolor <span className='text-primary'>sit amet</span>, consectetur adipiscing elit.
            </span>
                        </p>
                    </div>
                    <div className="flex flex-col max-md:items-start items-end gap-5">
                        <div className="items-center flex max-md:gap-3 gap-5">
                            <Button>
                                Contact me
                            </Button>
                            <Button variant={"outline"}>
                                My Resume
                            </Button>
                        </div>
                        <div>
                            <Button variant={"ghost"} className={"text-primary underline"}>
                                Home
                            </Button>

                            <Button variant={"ghost"} className="text-neutral-500">
                                Experiences
                            </Button>
                            <Button variant={"ghost"} className="text-neutral-500">
                                Projects
                            </Button>

                            <Button variant={"ghost"} className="text-neutral-500">
                                About
                            </Button>

                        </div>
                    </div>
                </div>
            </Section>
            <Section className="max-md:h-screen max-md:flex max-md:items-center max-md:justify-center">
                <p className="text-8xl max-md:text-3xl text-neutral-400  leading-tight font-bold inline">
                    BASE IN <span className='text-neutral-900'>
              HO CHI MINH, VIETNAM,
          </span>
                    WHO DEDICATED TO BUILDING HIGH QUALITY APPLICATIONS AS <span className="text-neutral-900">A PROBLEM SOLVERS.</span>
                </p>
            </Section>

            <Section>
                <div className="space-y-5">
                    <div
                        className="flex items-center gap-y-5 max-md:gap-5 gap-x-[100px] w-full justify-center flex-wrap">
                        {Array.from({length: 6}).map((_, index) => {
                            return <div key={index} className="flex items-center justify-center">

                                <div
                                    className="max-md:size-[100px] size-[120px] rounded-[28px] bg-neutral-500"></div>

                            </div>
                        })}

                    </div>
                    <div
                        className="flex items-center gap-y-5 max-md:gap-5 gap-x-[100px] w-full justify-center flex-wrap">
                        {Array.from({length: 5}).map((_, index) => {
                            return <div key={index} className="flex items-center justify-center">

                                <div className="max-md:size-[100px] size-[120px] rounded-[28px] bg-neutral-500"></div>

                            </div>
                        })}

                    </div>
                    <div
                        className="flex items-center gap-y-5 max-md:gap-5 gap-x-[100px] w-full justify-center flex-wrap">
                        {Array.from({length: 4}).map((_, index) => {
                            return <div key={index} className="flex items-center justify-center">

                                <div className="max-md:size-[100px] size-[120px] rounded-[28px] bg-neutral-500"></div>

                            </div>
                        })}

                    </div>
                </div>
            </Section>

            <Section fluid>
                <SectionHeading className="container">Projects.</SectionHeading>
                <div className="flex gap-5 flex-nowrap overflow-x-scroll snap-x snap-mandatory" style={{
                    scrollbarWidth: "none",
                    scrollPadding: "calc(50% - min(var(--container), 90.5%)/2)"
                }}>
                    <div data-slot="item-container" className="min-w-fit"
                         style={{
                             padding: "0 calc(50% - min(var(--container), 90.5%)/2)",
                             width: "min(var(--container), 87.5%)"
                         }}>
                        <div className="grid gap-5" style={{
                            gridAutoColumns: "1fr",
                            gridAutoFlow: "column",
                            marginInlineStart: "auto",
                            marginInlineEnd: "auto",
                        }}>
                            {Array.from({length: 4}).map((_, index) => {
                                return (
                                    <div data-slot={"card"}
                                         className='max-md:w-[260px] w-[696px] md:min-w-[372px] will-change-auto snap-start'
                                         key={index}
                                         data-index={index}>
                                        <div
                                            className="w-full max-md:aspect-[260/314] aspect-[696/450] rounded-3xl bg-neutral-300 object-cover"></div>
                                        <div
                                            className="max-w-0.8 px-[15px] max-md:pt-6 pt-7 max-md:text-sm text-base text-neutral-500 font-medium">
                                            <span className="text-neutral-900">Lorem ipsum dolor sit amet</span>,
                                            consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                                            dolore magna aliqua.
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </Section>
            <Section>
                <SectionHeading className="text-neutral-400 text-center">
                    Something is really <span className="text-neutral-900">interested</span> about me.
                </SectionHeading>
                <div
                    className="grid max-md:grid-cols-1 grid-cols-6 max-md:auto-rows-[162px] md:grid-rows-[repeat(3,224px)] gap-5">
                    <div className="md:col-start-1 md:col-end-4 md:row-span-2">
                        <div className="rounded-[28px] bg-neutral-200 p-4 size-full"></div>
                    </div>
                    <div className="md:col-start-4 md:col-end-7 md:row-span-1">
                        <div className="rounded-[28px] bg-neutral-500 p-4 size-full"></div>
                    </div>
                    <div className="md:col-start-4 md:col-end-7 md:row-span-2">
                        <div className="rounded-[28px] bg-neutral-300 p-4 size-full"></div>
                    </div>
                    <div className="md:col-start-1 md:col-end-2 md:row-span-1">
                        <div className="rounded-[28px] bg-neutral-100 p-4 size-full"></div>
                    </div>
                    <div className="md:col-start-2 md:col-end-4 md:row-span-1">
                        <div className="rounded-[28px] bg-neutral-600 p-4 size-full"></div>
                    </div>

                </div>
            </Section>
            <Section>
                <SectionHeading>
                    Experiences.
                </SectionHeading>
                <div>
                    <div className="space-y-6">
                        {
                            Array.from({length: 4}).map((_, index) => {
                                return (
                                    <div key={"experience" + index} className="flex gap-4">
                                        <div>
                                            <div className="aspect-square rounded-full bg-neutral-300 w-10"></div>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="space-y-1">
                                                <h3 className="text-base font-bold text-neutral-900">Company Arc.</h3>
                                                <p className="text-sm font-normal text-neutral-700">Full-time • 21st
                                                    August, 1 yr 8 mos</p>
                                                <p className="text-sm font-normal text-neutral-500">
                                                    Hybrid
                                                </p>

                                            </div>
                                            <ul>
                                                <li data-slot="experience-item">
                                                    <div className="relative flex flex-col w-full">
                                                        <span
                                                            className="relative block mb-[-0.8rem] top-3 left-[-2.6rem] w-2 h-2 bg-neutral-300 rounded-full"/>
                                                        <div className="py-2 space-y-3 experience-item__content">
                                                            <div className="space-y-1">
                                                                <h3 className="text-base font-bold text-neutral-900">Middle
                                                                    Frontend Developer</h3>
                                                                <p className="text-sm font-normal text-neutral-700">Apr
                                                                    2025 - Present • 7 mos</p>
                                                            </div>
                                                            <p className="text-sm font-normal text-neutral-900 max-w-[80%]">Lorem
                                                                ipsum dolor sit amet, consectetur adipiscing elit, sed
                                                                do eiusmod tempor incididunt ut labore et dolore magna
                                                                aliqua.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li data-slot="experience-item">
                                                    <div className="relative flex flex-col w-full">
                                                        <span
                                                            className="relative block mb-[-0.8rem] top-2 left-[-2.6rem] w-2 h-2 bg-neutral-300 rounded-full"/>
                                                        <div className="py-2 space-y-3 experience-item__content">
                                                            <div className="space-y-1">
                                                                <h3 className="text-base font-bold text-neutral-900">Middle
                                                                    Frontend Developer</h3>
                                                                <p className="text-sm font-normal text-neutral-700">Apr
                                                                    2025 - Present • 7 mos</p>
                                                            </div>
                                                            <p className="text-sm font-normal text-neutral-900 max-w-[80%]">Lorem
                                                                ipsum dolor sit amet, consectetur adipiscing elit, sed
                                                                do eiusmod tempor incididunt ut labore et dolore magna
                                                                aliqua.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </Section>
        </main>
    );
}
