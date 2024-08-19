import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import ProjectDetailPage from "./pages/ProjectDetailPage.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
    },
    {
        path: 'project',
        element: <ProjectDetailPage/>
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}>
            <App/>
        </RouterProvider>
    </React.StrictMode>,
)
