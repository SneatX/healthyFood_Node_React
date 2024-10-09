import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ErrorBoundary from './pages/ErrorBoundary'
import Index from './pages/Index'
import Home from "./pages/Home"
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'

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
        element: <Index />,
        loader: loader,
        errorElement: <ErrorBoundary />,
    },
    {
        path: "/home",
        element: <Home />,
        loader: loader,
        errorElement: <ErrorBoundary />,
    },
    {
        path: "/login",
        element: <LogIn />,
    },
    {
        path: "/signup",
        element: <SignUp />,
    }
])

export default function Router() {
    return <RouterProvider router={routes} />
}