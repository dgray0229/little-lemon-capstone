import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Booking, ConfirmedBooking, Header } from './index';

const router = createBrowserRouter([
  { path: '/', element: <Header /> },
  { path: '/booking', element: <Booking /> },
  { path: '/confirmed', element: <ConfirmedBooking /> },
  { path: '*', element: <h1>Not Found</h1> },
]);

export function Main () {
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}
