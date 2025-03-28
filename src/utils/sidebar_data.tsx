import { Image } from '@phosphor-icons/react';
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
  User2,
} from 'lucide-react';

export const sidebar_data = {
  user: {
    name: 'mhShohan',
    email: 'mehdihasanshohan25@gmail.com',
    avatar:
      'https://mhshohan.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofile-pic.5fdf5253.png&w=640&q=75',
  },
  teams: [
    {
      name: 'ReactSphere',
      logo: GalleryVerticalEnd,
      plan: '',
    },
    {
      name: 'Acme Corp.',
      logo: AudioWaveform,
      plan: 'Startup',
    },
    {
      name: 'Evil Corp.',
      logo: Command,
      plan: 'Free',
    },
  ],
  navMain: [
    {
      title: 'Profile Generator',
      url: '/profile',
      icon: User2,
      isActive: false,
      items: [],
    },
    {
      title: 'Banner Generation',
      url: '/banner-generation',
      icon: Image,
      isActive: false,
      items: [],
    },
    {
      title: 'Drag & Drop',
      url: '#',
      icon: SquareTerminal,
      isActive: false,
      items: [
        {
          title: 'Vertical',
          url: '/vertical',
        },
        {
          title: 'Horizontal',
          url: '/horizontal',
        },
      ],
    },
    {
      title: 'Models',
      url: '#',
      icon: Bot,
      items: [
        {
          title: 'Genesis',
          url: '#',
        },
        {
          title: 'Explorer',
          url: '#',
        },
        {
          title: 'Quantum',
          url: '#',
        },
      ],
    },
    {
      title: 'Documentation',
      url: '#',
      icon: BookOpen,
      items: [
        {
          title: 'Introduction',
          url: '#',
        },
        {
          title: 'Get Started',
          url: '#',
        },
        {
          title: 'Tutorials',
          url: '#',
        },
        {
          title: 'Changelog',
          url: '#',
        },
      ],
    },
    {
      title: 'Settings',
      url: '#',
      icon: Settings2,
      items: [
        {
          title: 'General',
          url: '#',
        },
        {
          title: 'Team',
          url: '#',
        },
        {
          title: 'Billing',
          url: '#',
        },
        {
          title: 'Limits',
          url: '#',
        },
      ],
    },
  ],
  projects: [
    {
      name: 'Design Engineering',
      url: '#',
      icon: Frame,
    },
    {
      name: 'Sales & Marketing',
      url: '#',
      icon: PieChart,
    },
    {
      name: 'Travel',
      url: '#',
      icon: Map,
    },
  ],
};
