import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import HomePage from './pages/HomePage';
import ListingDetailsPage from './pages/ListingDetailsPage';
import NotFoundPage from './pages/NotFoundPage';
import ListingFavoritesPage from './pages/ListingFavoritesPage';
import SignInPage from './pages/SignInPage';
import Route from './components/Route';
import ProfilePage from './pages/ProfilePage';
import CreateListingPage from './pages/CreateListingPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '/signin',
        element: (
          <Route isProtected={false}>
            <SignInPage />
          </Route>
        ),
      },
      {
        path: '/',
        element: (
          <Route isProtected={true}>
            <HomePage />
          </Route>
        ),
      },
      {
        path: '/listings/:create',
        element: (
          <Route isProtected={true}>
            <CreateListingPage />
          </Route>
        ),
      },
      {
        path: '/listings/:listingId',
        element: (
          <Route isProtected={true}>
            <ListingDetailsPage />
          </Route>
        ),
      },

      {
        path: '/favorites',
        element: (
          <Route isProtected={true}>
            <ListingFavoritesPage />
          </Route>
        ),
      },
      {
        path: '/profile',
        element: (
          <Route isProtected={true}>
            <ProfilePage />
          </Route>
        ),
      },
    ],
  },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
