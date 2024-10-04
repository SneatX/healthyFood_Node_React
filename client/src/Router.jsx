import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ErrorBoundary from './pages/ErrorBoundary'
import Home from './pages/Home'
import LogIn from './pages/LogIn'
import "../index.css"

const loader = async () => {
    let response = await fetch("http://localhost:3000/auth-check", {
        method: "GET",
        credentials: "include"
    })
    let data = await response.json()
    if (!data.authenticated) {
        throw new Response(null, { status: 401 })
    }
    return data
}

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        loader: loader,
        errorElement: <ErrorBoundary />,
    },
    {
        path: "/login",
        element: <LogIn />,
    },
])

export default function Router() {
    return <RouterProvider router={routes} />
}