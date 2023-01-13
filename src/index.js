import React from "react";
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom";
import "./index.css";

import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

import 'flowbite';
import Root from "./pages/Root";
import Home from "./pages/Home";
import MemeCreate from "./pages/MemeCreate";
import Error from "./pages/Error";

import Login from "./pages/Login";
import Register from "./pages/Register";
import {Provider, useSelector} from "react-redux";

import {
    Navigate,
} from "react-router-dom";

import store from './store/store'
import OwnMemes from "./pages/OwnMemes";

const PrivateRoute = ({ auth: { isAuthenticated }, children }) => {
    const logged = useSelector((state) => state.auth.logged)
    return logged ? children : <Navigate to="/login" />;
};



const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement:<Error/>,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "/meme/create/:id",
                element: <MemeCreate />,
            },
            {
                path: "/yourmemes/:userid",
                element: <OwnMemes />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>

);
serviceWorkerRegistration.unregister();
reportWebVitals();


