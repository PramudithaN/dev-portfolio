import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'Pramuditha Nadun',
  description:
    "I'm a Associate Software Engineer with a passion for creating web applications. I have experience in both front-end and back-end development, and I'm always eager to learn new technologies and improve my skills. I enjoy collaborating with teams and contributing to projects that make a difference.",
  href: 'https://github.com/PramudithaN',
  author: 'Pramuditha Nadun',
  locale: 'en-US',
  location: 'Sri Lanka',
  buttonText: 'Download Resume',
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/',
    label: 'home',
  },
  {
    href: '/projects',
    label: 'projects',
  },
   {
    href: '/contact',
    label: 'contact',
  },
  // {
  //   href: '/blog',
  //   label: 'blog',
  // },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/PramudithaN',
    label: 'GitHub',
  },
  {
    href: 'mailto:pramudithanadun@gmail.com',
    label: 'Email',
  },
  {
    href: 'https://www.instagram.com/pramx.psd?igsh=MWNtaXF2cWw2ajEwcg==',
    label: 'Instagram',
  },
  {
    href: 'http://www.linkedin.com/in/pramuditha-nadun-612b1b204',
    label: 'LinkedIn',
  },
  {
    href: 'https://web.facebook.com/pramuditha.nadun',
    label: 'Facebook',
  }
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  Instagram: 'lucide:instagram',
  Phone: 'lucide:phone',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
  LinkedIn: 'lucide:linkedin',
  Facebook: 'lucide:facebook',
}

export interface Category {
  text: string
  logo: string
}

export type Technologies = {
  'Web Development': Category[]
  'Development Tools': Category[]
  'Hosting and Cloud Services': Category[]
  'Operating Systems': Category[]
  'Other Programming Languages and Technologies': Category[]
  'Web Servers': Category[]
  Databases: Category[]
  'Other Software': Category[]
}

export const technologies: Technologies = {
  'Web Development': [
    { text: 'HTML', logo: 'mdi:language-html5' },
    { text: 'JavaScript', logo: 'mdi:language-javascript' },
    { text: 'CSS', logo: 'mdi:language-css3' },
    { text: 'Astro', logo: 'simple-icons:astro' },
    { text: 'Tailwind CSS', logo: 'mdi:tailwind' },
    {text:'Figma', logo: 'cib:figma'},
  ],
  'Development Tools': [
    { text: 'Visual Studio Code', logo: 'mdi:visual-studio-code' },
    { text: 'Git', logo: 'mdi:git' },
  ],
  'Hosting and Cloud Services': [
    {text:'Render', logo: 'cib:render'},
    { text: 'Vercel', logo: 'cib:vercel' },
    { text: 'GitHub Pages', logo: 'cib:github' },
  ],
  'Operating Systems': [
    { text: 'Windows', logo: 'mdi:windows' },
    { text: 'Linux', logo: 'mdi:linux'},
    
  ],
  'Other Programming Languages and Technologies': [
    { text: 'React', logo: 'mdi:react' },
    { text: 'TypeScript', logo: 'mdi:language-typescript' },
    { text: 'Python', logo: 'mdi:language-python' },
    { text: 'Java', logo: 'mdi:language-java' },
    { text: 'Node.js', logo: 'mdi:nodejs' },
  ],
  'Web Servers': [
    // { text: 'Apache', logo: 'cib:apache' },
    // { text: 'Nginx', logo: 'cib:nginx' },
  ],
  Databases: [
    // { text: 'MySQL', logo: 'cib:mysql' },
    // { text: 'MongoDB', logo: 'cib:mongodb' },
  ],
  'Other Software': [
    { text: 'Discord', logo: 'mdi:discord' },
    { text: 'Spotify', logo: 'mdi:spotify' },
    { text: 'Visual Studio', logo: 'mdi:visual-studio' },
    { text: 'Brave', logo: 'cib:brave' },
  ],
}
