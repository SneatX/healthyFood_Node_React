import { useLoaderData } from "react-router-dom"
import "./css/Home.css"

export default function Home() {
    const data = useLoaderData()
    console.log(data)

    return (
        <>
            <h1>Home</h1>
            <p>En teoría está logueado</p>
        </>
    )
}
