import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'




import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './pages/Root';
import SecondLoginPage from './shared/SecondLoginPage';
import Login from './shared/Login';
import ThirdPage from './shared/ThirdPage';
import UsersHomePage from './pages/UsersHomePage';
import Home from './pages/Home';
import Provider from './provider/Provider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import LinkPage from './pages/LinkPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Login />
      },
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/secondLoginPage',
        element: <SecondLoginPage />
      },
      {
        path: '/thirdPage',
        element: <ThirdPage />
      },
      {
        path: '/usersHomePage',
        element: <UsersHomePage />
      },
      {
        path:'/linkPage',
        element:<LinkPage></LinkPage>


      }
    ]
  },
]);


const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider>
        <RouterProvider router={router} />
      </Provider>
    </QueryClientProvider>

  </StrictMode>,
)
