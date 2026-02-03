"use client";

import React from "react";
import { skillsData } from "@/common/lib/data";
import { useSectionInView } from "@/common/lib/hooks";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "@/common/components/shared/section-heading";
import SectionDivider from "@/common/components/shared/section-divider";

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

export default function Skills() {
  const { ref } = useSectionInView("skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="flex w-full flex-col items-center justify-center py-24 pb-[150px] text-center dark:bg-darkBg dark:text-white sm:pb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <div className="glass-card mt-10 max-w-[53rem] rounded-2xl border border-white/10 p-8 sm:p-12">
        <ul className="flex flex-wrap items-center justify-center gap-3 text-lg text-gray-300">
          {skillsData.map((skill, index) => (
            <motion.li
              className="flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 font-mono text-sm transition-all hover:border-electricCyan/50 hover:bg-electricCyan/10 hover:text-electricCyan hover:shadow-[0_0_10px_rgba(34,211,238,0.2)] md:text-base"
              key={index}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
            >
              <Image
                src={skill[1]}
                alt={skill[0]}
                width={24}
                height={24}
                className="mr-2 inline h-5 w-5 md:h-6 md:w-6"
              />
              {skill[0]}
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
