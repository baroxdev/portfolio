import {Button} from "@/components/ui/button";
import React from "react";
import {cn} from "@/lib/utils";

type SectionProps = React.ComponentPropsWithoutRef<'section'> & {
    fluid?:boolean
}
const Section: React.FC<SectionProps> = ({children, fluid = false}) => {
    return <section className={cn(' py-20 w-full', {
        'container': !fluid
    })}>
        {children}
    </section>
}

type SectionHeadingProps = React.ComponentPropsWithoutRef<"h2">
const SectionHeading: React.FC<SectionHeadingProps> = ({children, className, ...props}) => {
    return <h2 className={cn("text-neutral-900 mb-16 font-bold text-6xl", className)} {...props}>
        {children}
    </h2>
}



export default function Home() {
  return (
  <main>
      <Section>
          <div className="flex justify-between items-end">
              <div className="space-y-5">
                  <p className="text-2xl">
            <span>
                Hi, I&#39;m Bao Phan,
            </span>
                  </p>
                  <h1 className="font-bold text-5xl">
            <span>
                A Software Engineer
            </span>
                  </h1>
                  <p className='text-neutral-600'>
            <span className=''>
                Lorem ipsum dolor <span className='text-primary'>sit amet</span>, consectetur adipiscing elit.
            </span>
                  </p>
              </div>
              <div className="flex flex-col items-end gap-5">
                  <div className="items-center flex gap-5">
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
      <Section>
          <p className="text-8xl text-neutral-400  leading-tight font-bold inline">
              BASE IN <span className='text-neutral-900'>
              HO CHI MINH, VIETNAM,
          </span>
               WHO DEDICATED TO BUILDING HIGH QUALITY APPLICATIONS AS <span className="text-neutral-900">A PROBLEM SOLVERS.</span>
          </p>
      </Section>

      <Section>
         <div className="space-y-5">
             <div className="flex items-center gap-y-5 gap-x-[100px] w-full justify-center flex-wrap">
                 {Array.from({length: 6}).map((_, index) => {
                     return <div key={index} className="flex items-center justify-center">

                         <div className="w-[120px] h-[120px] rounded-[28px] bg-neutral-500"></div>

                     </div>
                 })}

             </div>
             <div className="flex items-center gap-y-5 gap-x-[100px] justify-center flex-wrap">
                 {Array.from({length: 5}).map((_, index) => {
                     return <div key={index} className="flex items-center justify-center">

                         <div className="w-[120px] h-[120px] rounded-[28px] bg-neutral-500"></div>

                     </div>
                 })}

             </div>
             <div className="flex items-center gap-y-5 gap-x-[100px] justify-center flex-wrap">
                 {Array.from({length: 4}).map((_, index) => {
                     return <div key={index} className="flex items-center justify-center">

                         <div className="w-[120px] h-[120px] rounded-[28px] bg-neutral-500"></div>

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
                          <div data-slot={"card"} className='w-[696px] min-w-[372px] will-change-auto snap-start' key={index} data-index={index}>
                              <div className="w-full aspect-[696/450] rounded-3xl bg-neutral-300 object-cover"></div>
                              <div className="max-w-0.8 px-[15px] pt-7 text-base text-neutral-500 font-medium">
                                  <span className="text-neutral-900">Lorem ipsum dolor sit amet</span>, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
          <div className="grid grid-cols-6 grid-rows-[repeat(3,224px)] gap-5">
              <div className="col-start-1 col-end-4 row-span-2">
                  <div className="rounded-[28px] bg-neutral-200 p-4 size-full"></div>
              </div>
              <div className="col-start-4 col-end-7 row-span-1">
                  <div className="rounded-[28px] bg-neutral-500 p-4 size-full"></div>
              </div>
              <div className="col-start-4 col-end-7 row-span-2">
                  <div className="rounded-[28px] bg-neutral-300 p-4 size-full"></div>
              </div>
              <div className="col-start-1 col-end-2 row-span-1">
                  <div className="rounded-[28px] bg-neutral-100 p-4 size-full"></div>
              </div>
              <div className="col-start-2 col-end-4 row-span-1">
                  <div className="rounded-[28px] bg-neutral-600 p-4 size-full"></div>
              </div>

          </div>
      </Section>
      <Section>
          <SectionHeading>
              Experiences.
          </SectionHeading>
          <div >
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
                                          <p className="text-sm font-normal text-neutral-700">Full-time • 21st August, 1 yr 8 mos</p>
                                          <p className="text-sm font-normal text-neutral-500">
                                              Hybrid
                                          </p>

                                      </div>
                                      <ul>
                                          <li data-slot="experience-item">
                                              <div className="relative flex flex-col w-full">
                                                  <span className="relative block mb-[-0.8rem] top-3 left-[-2.6rem] w-2 h-2 bg-neutral-300 rounded-full"/>
                                                  <div className="py-2 space-y-3 experience-item__content">
                                                      <div className="space-y-1">
                                                          <h3 className="text-base font-bold text-neutral-900">Middle Frontend Developer</h3>
                                                          <p className="text-sm font-normal text-neutral-700">Apr 2025 - Present • 7 mos</p>
                                                      </div>
                                                      <p className="text-sm font-normal text-neutral-900 max-w-[80%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                      </p>
                                                  </div>
                                              </div>
                                          </li>
                                          <li data-slot="experience-item">
                                              <div className="relative flex flex-col w-full">
                                                  <span className="relative block mb-[-0.8rem] top-2 left-[-2.6rem] w-2 h-2 bg-neutral-300 rounded-full"/>
                                                  <div className="py-2 space-y-3 experience-item__content">
                                                      <div className="space-y-1">
                                                          <h3 className="text-base font-bold text-neutral-900">Middle Frontend Developer</h3>
                                                          <p className="text-sm font-normal text-neutral-700">Apr 2025 - Present • 7 mos</p>
                                                      </div>
                                                      <p className="text-sm font-normal text-neutral-900 max-w-[80%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
