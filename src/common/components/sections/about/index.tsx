'use client';

import { useSectionInView } from '@/common/lib/hooks';
import portfolioImg from '@/../public/images/new.png';
import { smoothScrollTo } from '@/common/lib/utils';
import SectionDivider from '@/common/components/shared/section-divider';
import SectionHeading from '@/common/components/shared/section-heading';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import Link from 'next/link';

export default function About() {
  const { ref } = useSectionInView('about', 0.4);
  const divRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: divRef,
    offset: ['0 1', '1.33 1'],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.section
      className="z-50 flex h-[1000px] w-full flex-col items-center justify-start leading-8 text-white md:scroll-mt-4 lg:h-[1100px] lg:scroll-mt-24"
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175, ease: 'easeInOut' }}
      id="about"
    >
      <div className="flex w-full flex-col items-center pt-8">
        <SectionHeading>About Me</SectionHeading>
        <motion.div
          className="glass-card w-full overflow-hidden px-10 py-12 sm:w-[80%] sm:text-center lg:h-[700px] lg:w-[1040px] xl:w-[1180px] rounded-2xl border border-white/10"
          ref={divRef}
          style={{
            scale: scaleProgess,
            opacity: opacityProgess,
            willChange: 'transform, opacity',
            transform: 'translateZ(0)',
          }}
        >
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 h-full">
            {/* Image Container */}
            <div className="relative group flex-shrink-0">
              <div className="relative h-64 w-64 sm:h-72 sm:w-72 lg:h-[380px] lg:w-[380px] xl:h-[450px] xl:w-[450px]">
                <div className="absolute inset-0 z-20 rounded-full bg-gradient-to-b from-electricCyan/20 via-transparent to-neonViolet/20 blur-2xl transition-opacity group-hover:opacity-40" />
                <div className="absolute inset-0">
                  <Image
                    src={portfolioImg}
                    alt="portfolio image"
                    placeholder="blur"
                    width={470}
                    height={470}
                    className="z-10 rounded-full border-2 border-white/10 grayscale transition-all duration-500 group-hover:grayscale-0 object-cover h-full w-full"
                  />
                </div>
              </div>
            </div>

            {/* Text Container */}
            <div className="flex flex-col gap-6 text-center lg:text-left max-w-2xl">
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                I&apos;m a <span className="text-electricCyan font-bold">Full-Stack Software Engineer</span> specializing in scalable
                web applications and cloud-native systems. With hands-on
                experience in <span className="font-mono text-electricCyan text-base">TypeScript, React, Node.js, Python</span>, and cloud
                platforms like <span className="font-mono text-neonViolet text-base">AWS and Azure</span>, I build intuitive,
                high-performance solutions. I graduated with a <span className="text-white font-bold">4.0/4.0 GPA</span> from
                Lamar University, receiving the Graduate Studies Award 2023.
                I&apos;m passionate about <span className="text-white">clean architecture</span>, automation, and
                creating seamless developer to deployment pipelines.
              </p>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                Seeking for Web Development opportunities where I can leverage
                my skills to create meaningful connections between products
                and users.
              </p>

              <div className="flex flex-col items-center lg:items-start mt-4">
                <span className="mb-4 font-mono text-sm text-gray-400">&gt; ready_to_collaborate?</span>
                <Link
                  href={'contact'}
                  onClick={(e) => {
                    smoothScrollTo({ e, id: 'contact' });
                  }}
                  className="group"
                >
                  <span className="inline-block rounded-full bg-electricCyan/10 px-8 py-3 text-lg font-bold uppercase text-electricCyan border border-electricCyan/50 transition hover:bg-electricCyan/20 hover:text-white hover:shadow-[0_0_15px_rgba(34,211,238,0.5)]">
                    Contact me!
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <SectionDivider />
    </motion.section >
  );
}
