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
  User2,
  Grip,
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
      icon: Grip,
      isActive: false,
      items: [
        {
          title: 'Vertical',
          url: '/dnd/vertical',
        },
        {
          title: 'Horizontal',
          url: '/dnd/horizontal',
        },
        {
          title: 'Kanban (Task Manager)',
          url: '/dnd/kanban',
        },
      ],
    },
    {
      title: 'Brain Games',
      url: '#',
      icon: Bot,
      items: [
        {
          title: 'Schulte Table',
          url: '/brain-games/schulte-table',
        },
        {
          title: 'Color Game',
          url: '/brain-games/color-game',
        },
      ],
    },
    {
      title: 'Data Visualization',
      url: '#',
      icon: BookOpen,
      items: [
        {
          title: 'All Charts',
          url: '/data-visualization/charts',
        },
        {
          title: 'Vertical Chart',
          url: '/data-visualization/vertical-chart',
        },
        {
          title: 'Horizontal Charts',
          url: '/data-visualization/horizontal-chart',
        },
        {
          title: 'Line Chart',
          url: '/data-visualization/line-chart',
        },
        {
          title: 'Pie Chart',
          url: '/data-visualization/pie-chart',
        },
        {
          title: 'Radar Chart',
          url: '/data-visualization/radar-chart',
        },
        {
          title: 'Doughnut Chart',
          url: '/data-visualization/doughnut-chart',
        },
        {
          title: 'Polar Area Chart',
          url: '/data-visualization/polar-area-chart',
        },
      ],
    },
    // {
    //   title: 'Settings',
    //   url: '#',
    //   icon: Settings2,
    //   items: [
    //     {
    //       title: 'General',
    //       url: '#',
    //     },
    //     {
    //       title: 'Team',
    //       url: '#',
    //     },
    //     {
    //       title: 'Billing',
    //       url: '#',
    //     },
    //     {
    //       title: 'Limits',
    //       url: '#',
    //     },
    //   ],
    // },
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
