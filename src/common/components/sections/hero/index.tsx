'use client';

import 'next-cloudinary/dist/cld-video-player.css';
import SectionDivider from '@/common/components/shared/section-divider';
import TextAnimation from './_components/text-animation';
import { useSectionInView } from '@/common/lib/hooks';
import { useActiveSectionContext } from '@/common/stores/active-section';
import { smoothScrollTo } from '@/common/lib/utils';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  const { ref } = useSectionInView('home');
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <>
      <section
        className="relative flex h-screen w-full scroll-mt-36 flex-col items-center justify-center"
        id="home"
        ref={ref}
      >
        <div
          className={
            'absolute left-0 top-0 h-screen w-full bg-[#020617]/80'
          }
        ></div>
        <video
          width="480"
          height="720"
          preload="none"
          autoPlay
          crossOrigin="anonymous"
          muted
          loop
          className="absolute -z-10 h-screen w-screen object-cover"
        >
          <source src="/layout3.mp4" />
        </video>
        <div className="container flex flex-col items-start justify-center tracking-wide text-white">
          <div className="container relative flex h-full w-full flex-col items-center">
            <div className="h-72 w-[280px] text-center text-[2rem] font-extrabold sm:w-[520px] md:w-[700px] lg:mb-5 lg:w-[920px] lg:text-[3rem]">
              <motion.span
                initial={{ y: -100, x: '-50%', opacity: 0 }}
                animate={{ y: 0, x: '-50%', opacity: 1 }}
                className="mb-10 text-start font-mono text-xl text-electricCyan"
              >
                &gt; initiating_sequence...
              </motion.span>
              <br />
              <motion.h1
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-4 font-sans text-4xl font-bold tracking-tight text-white sm:text-6xl"
              >
                Akhileshwar Reddy
                <span className="block text-electricCyan mt-2">Songala</span>
              </motion.h1>

              <TextAnimation delay={1} />
            </div>
            <motion.div
              className="w-92 flex flex-col items-center justify-center gap-4 px-4 text-sm font-medium md:mt-24 md:flex-row lg:text-lg"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1,
              }}
            >
              <a
                className="group flex w-64 cursor-pointer items-center justify-center gap-2 rounded-full bg-electricCyan/10 px-7 py-3 text-electricCyan outline-none border border-electricCyan/50 transition hover:bg-electricCyan/20 hover:text-white hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] sm:w-auto backdrop-blur-md"
                onClick={(e) => {
                  smoothScrollTo({ e, id: 'contact' });
                  setActiveSection('contact');
                  setTimeOfLastClick(Date.now());
                }}
              >
                <span>Contact me</span>
              </a>

              <a
                className="group flex w-64 cursor-pointer items-center justify-center gap-2 rounded-full bg-white/5 px-7 py-3 text-white outline-none border border-white/10 transition hover:bg-white/10 hover:text-electricCyan sm:w-auto backdrop-blur-md"
                href="/Akhileshwar%20Reddy%20Resume%20Full%20Stack.pdf"
                download
              >
                <span>Download CV</span>
              </a>

              <div className="flex gap-4">
                <a
                  className="flex h-[50px] w-[50px] cursor-pointer items-center justify-center gap-2 rounded-full bg-white/5 p-2 text-white border border-white/10 transition hover:bg-white/10 hover:text-electricCyan backdrop-blur-md"
                  href="https://www.linkedin.com/in/songala/"
                  target="_blank"
                >
                  <Linkedin />
                </a>
                <a
                  className="flex h-[50px] w-[50px] cursor-pointer items-center justify-center gap-2 rounded-full bg-white/5 p-2 text-white border border-white/10 transition hover:bg-white/10 hover:text-electricCyan backdrop-blur-md"
                  href="https://github.com/AkhileshwarReddySongala"
                  target="_blank"
                >
                  <Image
                    width={25}
                    height={25}
                    src={'/svgs/github.svg'}
                    alt="github icon"
                    className="invert"
                  />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <div className="flex w-full justify-center dark:bg-darkBg">
        <SectionDivider />
      </div>
    </>
  );
}
