import { createBrowserRouter} from 'react-router-dom';
import ErrorPage from '../ErrorPage/ErrorPage';
import Main from '../layout/Main';
import App from '../App';
import Services from '../components/Services/Services';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/services',
        element: <Services />,
      },
    ],
  },
]);

export default router;
