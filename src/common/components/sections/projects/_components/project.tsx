'use client';

import { useRef } from 'react';
import { projectsData } from '@/common/lib/data';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  link,
}: ProjectProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, type: 'spring' }}
      viewport={{ once: true }}
      className="group h-full"
    >
      <Link href={link} target="_blank" className="block h-full">
        <article className="glass-card flex h-full flex-col overflow-hidden rounded-xl border border-white/10 transition-all duration-300 hover:border-electricCyan/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:-translate-y-2">

          {/* Image Section */}
          <div className="relative h-64 w-full overflow-hidden bg-gray-900 border-b border-white/5">
            <Image
              src={imageUrl}
              alt={title}
              quality={95}
              className="absolute inset-0 h-full w-full object-cover opacity-80 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
          </div>

          {/* Content Section */}
          <div className="flex flex-1 flex-col p-6">
            <h3 className="mb-2 font-mono text-xl font-bold text-white group-hover:text-electricCyan transition-colors">
              {title}
            </h3>

            <p className="mb-6 flex-1 text-sm leading-relaxed text-gray-400">
              {description}
            </p>

            {/* Tags */}
            <ul className="flex flex-wrap gap-2 mt-auto">
              {tags.map((tag, index) => (
                <li
                  className="rounded px-2 py-1 text-[0.7rem] font-mono text-electricCyan bg-electricCyan/5 border border-electricCyan/20"
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}
