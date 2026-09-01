export const COLORS = {
  bgWarm: '#F7F5F0',
  textPrimary: '#111111',
  textSecondary: '#5F5F5F',
  textMuted: '#8A8A8A',
  border: '#E5E1DA',
  accent: '#FF572F',
  accentHover: '#E04722',
  darkBg: '#111111',
  darkBorder: '#262626',
  white: '#FFFFFF',
} as const;

export const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'My Journey', href: '/my-journey' },
  { label: 'Projects', href: '/projects' },
  { label: 'Certifications', href: '/certifications' },
  { label: 'Contact', href: '/contact' },
] as const;

const email_address = "harih7397108713@gmail.com";
const email_subject = "Inquiry: Connecting from Portfolio";
const email_body = "Hi HariHaran, I recently visited your portfolio and was impressed by your work. i would like to connect and discuss potential opportunities to collaborate. Looking forward to hearing from you.";

export const SOCIAL_LINKS = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/hari-haran-m-2a625925a',
    icon: 'linkedin',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/hariharan-design-dev',
    icon: 'github',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/harisdesigns.studio',
    icon: 'instagram',
  },
  {
    name: 'Email',
    href: `mailto:${email_address}?subject=${encodeURIComponent(email_subject)}&body=${encodeURIComponent(email_body)}`,
    icon: 'email',
  },
] as const;

export const CAPABILITY_SIGNALS = [
  {
    iconName: 'folder',
    primaryLabel: '8',
    supportingLabel: 'Projects Completed',
  },
  {
    iconName: 'layers',
    primaryLabel: 'AI + Design',
    supportingLabel: 'Workflow',
  },
  {
    iconName: 'code',
    primaryLabel: 'Design →',
    supportingLabel: 'Deployment',
  },
  {
    iconName: 'infinity',
    primaryLabel: '∞',
    supportingLabel: 'Curiosity & Learning',
  },
] as const;
