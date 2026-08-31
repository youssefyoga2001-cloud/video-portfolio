export const SITE = {
  name: 'Youssef Mohamed',
  logo: 'Youssef’s portfolio',
  email: 'youssefyoga2001@gmail.com',
  phone: '+201068411731',
  phoneDisplay: '+20 106 841 1731',
  role: 'AI Artist',
}

export const NAV_LINKS = [
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export type Project = {
  id: string
  title: string
  category: string
  year: string
  src: string
  /** Where in the clip to grab the still frame, 0-1. Tune per video. */
  posterAt?: number
}

export const PROJECTS: Project[] = [
  {
    id: 'o3-sigma',
    title: 'O3 Sigma',
    category: 'Generative Film',
    year: '2026',
    src: '/videos/o3-sigma.mp4',
    posterAt: 0.6,
  },
  {
    id: 'kowens',
    title: 'Kowens',
    category: 'AI Commercial',
    year: '2026',
    src: '/videos/kowens.mp4',
    posterAt: 0.6,
  },
  {
    id: 'zeina-story',
    title: 'Zeina Story',
    category: 'AI Narrative',
    year: '2026',
    src: '/videos/zeina-story.mp4',
  },
  {
    id: 'bullshead',
    title: 'Bullshead',
    category: 'Product Film',
    year: '2026',
    src: '/videos/bullshead.mp4',
  },
  {
    id: 'barraq',
    title: 'Barraq',
    category: 'Brand Campaign',
    year: '2026',
    src: '/videos/barraq.mp4',
  },
  {
    id: 'pharaohs-wear',
    title: 'Pharaohs Wear',
    category: 'AI Fashion Film',
    year: '2026',
    src: '/videos/pharaohs-wear.mp4',
  },
]

export const SERVICES = [
  'Generative Video',
  'Concept & Art Direction',
  'AI Character Design',
  'Style & Model Training',
  'Compositing & Cleanup',
  'Sound Design',
]
