import { HeroSectionType } from '@/lib/types/sections'
import { resumeFileName } from '@/lib/utils/config'

export const heroSection: HeroSectionType = {
    subtitle: 'Hi, my name is',
    title: 'hariom mahato.',
    tagline: 'I build robust fullstack web applications.',
    description:
    "I'm a passionate Fullstack web developer with experience in building web applications using technologies such as React.js & Next.js for the frontend, Node.js & Express.js for the backend, and databases like MongoDB. Additionally, I have expertise in TypeScript, TailwindCSS, and UI/UX designing.",
    specialText: 'Currently available for job opportunities and freelance projects.',
    cta: {
        title: 'see my resume',
        url: `/${resumeFileName}`,
        hideInDesktop: true,
    },
};
