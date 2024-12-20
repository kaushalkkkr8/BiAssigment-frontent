import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import EventPage from './page/EventPage';
const root = ReactDOM.createRoot(document.getElementById('root'));

const router= createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/eventPage/:id',
    element: <EventPage/>
  }
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


