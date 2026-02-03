'use client';

import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useTheme } from 'next-themes';
import { useHasMounted, useSectionInView } from '@/common/lib/hooks';
import SectionHeading from '@/common/components/shared/section-heading';
import { experiencesData } from '@/common/lib/data';
import SectionDivider from '@/common/components/shared/section-divider';

export default function Experience() {
  const { ref } = useSectionInView('experience');
  const { theme } = useTheme();
  const ihasMounted = useHasMounted();

  return (
    <section
      id="experience"
      ref={ref}
      className="w-full flex flex-col items-center scroll-mt-20 dark:bg-darkBg dark:text-white"
    >
      <SectionHeading>My experience</SectionHeading>
      <div className="w-full max-w-4xl mx-auto">
        <VerticalTimeline animate={false}>
          {ihasMounted &&
            experiencesData.map((item, index) => (
              <React.Fragment key={index}>
                <VerticalTimelineElement
                  contentStyle={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    boxShadow: 'none',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    textAlign: 'left',
                    padding: '1.3rem 2rem',
                  }}
                  contentArrowStyle={{
                    borderRight: '0.4rem solid rgba(255, 255, 255, 0.5)',
                  }}
                  date={item.date}
                  icon={item.icon}
                  iconStyle={{
                    background: 'rgba(34, 211, 238, 0.1)', // electricCyan/10
                    fontSize: '1.5rem',
                    color: '#22d3ee', // electricCyan
                    border: '1px solid rgba(34, 211, 238, 0.5)',
                    backdropFilter: 'blur(10px)',
                  }}
                  dateClassName="text-white/70 font-mono text-sm"
                >
                  <h3 className="font-bold text-white text-xl">{item.title}</h3>
                  <p className="!mt-0 font-medium text-electricCyan">{item.location}</p>
                  <p className="!mt-2 !font-normal text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </VerticalTimelineElement>
              </React.Fragment>
            ))}
        </VerticalTimeline>
      </div>
      <div className="flex w-full justify-center dark:bg-darkBg">
        <SectionDivider />
      </div>
    </section>
  );
}
