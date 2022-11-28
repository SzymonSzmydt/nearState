import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './contex/redux/store'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom";
import 'normalize.css';
import './index.css';
import App from './App';
import { Home } from './pages/home/Home';
import { Contact } from './pages/contact/Contact';
import { Informations } from './pages/informations/Infortmations';

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<App />}>
                <Route index={true} element={<Home />} />
                <Route path="contact" element={<Contact />} />
                <Route path="informations" element={<Informations />} />
            </Route>
            <Route path="*" element={<App />} />
        </>
    )
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);
