import { DotsNine, DotsSix, DotsSixVertical, HouseLine } from '@phosphor-icons/react';
import { ReactNode } from 'react';

const routesPaths = [
  { name: 'Home', path: '/', Icon: HouseLine, element: <h1>Dashboard</h1>, children: [] },
  {
    name: 'Drag & Drop',
    path: '/drag-n-drop',
    Icon: DotsNine,
    element: <h1>Drag & Drop</h1>,
    children: [
      {
        name: 'Vertical (Tab)',
        path: 'vertical',
        Icon: DotsSixVertical,
        element: <h1>Drag & Drop - Vertical (Tab)</h1>,
      },
      {
        name: 'Horizontal',
        path: 'horizontal',
        Icon: DotsSix,
        element: <h1>Drag & Drop - Horizontal</h1>,
      },
    ],
  },
];

interface IRoute {
  path: string;
  element: ReactNode;
  children?: {
    path: string;
    element: ReactNode;
  }[];
}

const routes = routesPaths.map((routesPath) => {
  const route: IRoute = { path: routesPath.path, element: routesPath.element };
  if (routesPath.children && routesPath.children.length > 0) {
    const children = routesPath.children.map((child) => ({
      path: child.path,
      element: child.element,
    }));

    route.children = children;
  }
  return route;
});

export default routes;
