'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import SectionDivider from '@/common/components/shared/section-divider';
import SectionHeading from '@/common/components/shared/section-heading';
import { badgesData } from '@/common/lib/data';
import { useSectionInView } from '@/common/lib/hooks';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Badges() {
  const { ref } = useSectionInView('badges', 0.5);

  return (
    <section
      id="badges"
      ref={ref}
      className="flex w-full flex-col items-center justify-center py-24 pb-[150px] text-center dark:bg-darkBg dark:text-white sm:pb-40"
    >
      <SectionHeading>My Badges</SectionHeading>
      <div className="glass-card mt-10 w-full sm:w-[80%] lg:w-[1040px] xl:w-[1180px] rounded-2xl border border-white/10 p-8 sm:p-12">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 items-center justify-center">
          {badgesData.map((badge, index) => (
            <motion.li
              className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-4 transition-all hover:border-electricCyan/50 hover:bg-electricCyan/10 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] group"
              key={index}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
            >
              <Link
                href={badge.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center w-full h-full"
              >
                <div className="relative w-full h-48 md:h-64 mb-4">
                  <Image
                    src={badge.imageUrl}
                    alt={badge.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="font-mono text-sm md:text-base text-gray-300 group-hover:text-electricCyan">
                  {badge.title}
                </h3>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
      <div className="flex w-full justify-center mt-24">
        <SectionDivider />
      </div>
    </section>
  );
}
