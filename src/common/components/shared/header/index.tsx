'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import { links } from '@/common/lib/data';
import { smoothScrollTo } from '@/common/lib/utils';
import { useActiveSectionContext } from '@/common/stores/active-section';

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="relative z-[99]">
      <motion.div
        className="fixed left-1/2 top-0 h-[4.5rem] w-full rounded-none border border-white/40 bg-white/80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] md:w-[62rem] md:rounded-full dark:border-white/10 dark:bg-[#020617]/50"
        initial={{ y: -100, x: '-50%', opacity: 0 }}
        animate={{ y: 0, x: '-50%', opacity: 1 }}
      ></motion.div>

      <nav className="fixed left-1/2 top-[0.15rem] flex h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex flex-wrap items-center justify-center gap-y-2 text-[0.9rem] font-medium transition-colors sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              className="relative flex h-3/4 items-center justify-center text-gray-300 hover:text-white"
              key={link.id}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className="flex w-full items-center justify-center px-3 py-3 uppercase transition"
                href={link.id}
                onClick={(e) => {
                  smoothScrollTo({ e, id: link.id });
                  setActiveSection(link.id);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}

                {link.id === activeSection && (
                  <motion.span
                    className="absolute inset-0 -z-10 rounded-full bg-electricCyan/20 border border-electricCyan/50"
                    layoutId="activeSection"
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
