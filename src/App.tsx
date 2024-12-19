import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SideBar from './components/SideBar';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SideBar />,
    children: [
      {
        path: 'home',
        element: <h1>Home</h1>,
      },
      {
        path: 'about',
        element: <h1>about</h1>,
      },
    ],
  },
  { path: '*', element: <NotFound /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
