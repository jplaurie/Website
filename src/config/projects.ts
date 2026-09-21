export type ProjectIcon = 'home' | 'research' | 'calendar' | 'document' | 'edit' | 'users';

export interface ProjectNavItem {
  label: string;
  icon: ProjectIcon;
  href?: string;
  children?: Array<{ label: string; href: string }>;
}

export interface ProjectHeaderConfig {
  title: string;
  logo: string;
  logoAlt: string;
  logoPanel?: boolean;
  homeHref: string;
  homeLabel: string;
  links: ProjectNavItem[];
}

export const projectHeaders: Record<'halt' | 'sig' | 'leverhulme', ProjectHeaderConfig> = {
  halt: {
    title: 'Hydrodynamical Approach to Light Turbulence',
    logo: '/haltproject/assets/images/halt-logo-460x208.png',
    logoAlt: 'HALT',
    logoPanel: true,
    homeHref: '/haltproject.html',
    homeLabel: 'HALT Project Home',
    links: [
      { label: 'Consortium', href: '/haltproject/consortium.html', icon: 'users' },
      { label: 'Research', href: '/haltproject/research.html', icon: 'research' },
      { label: 'Publications', href: '/haltproject/publications.html', icon: 'document' },
      { label: 'Activities', href: '/haltproject/activities.html', icon: 'calendar' }
    ]
  },
  sig: {
    title: 'SIG in Wave Turbulence',
    logo: '/assets/images/UKfluids.png',
    logoAlt: 'UK Fluids Network',
    logoPanel: true,
    homeHref: '/sigwt.html',
    homeLabel: 'Wave Turbulence SIG Home',
    links: [
      {
        label: 'Meetings',
        icon: 'calendar',
        children: [
          { label: 'Warwick 2017', href: '/sigwt/warwick2017.html' },
          { label: 'Aston 2017', href: '/sigwt/aston2017.html' },
          { label: 'Newcastle 2018', href: '/sigwt/newcastle2018.html' },
          { label: 'UEA 2019', href: '/sigwt/uea2019.html' }
        ]
      }
    ]
  },
  leverhulme: {
    title: 'A Mathematical Approach to Tame Optical Turbulence',
    logo: '/assets/images/leverhulme_trust_white.png',
    logoAlt: 'Leverhulme Trust',
    homeHref: '/leverhulme.html',
    homeLabel: 'Leverhulme Project Home',
    links: [
      { label: 'Research', href: '/leverhulme/research.html', icon: 'research' }
    ]
  }
};
