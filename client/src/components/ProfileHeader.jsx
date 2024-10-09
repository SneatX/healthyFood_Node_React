import { useEffect, useState } from "react"

export default function ProfileHeader(){

    const [user, setUser] = useState({})

    async function fetchUser(){
        let response = await fetch("http://localhost:3000/auth-check", {
            method: "GET",
            credentials: "include"
        })
        let data = await response.json()
        setUser(data.user)
    }
    
    useEffect(() => {
        fetchUser()
    }, [])

    return(
        <main className="flex w-full items-center justify-between">
            <div className="flex gap-[10px] items-center">
                <div>
                    <img src={user.img} alt="profile" className="w-16 h-16 rounded-full border-2 border-[#93D8A2]" />
                </div>
                <div className="text-xl">
                    {
                        !user.name ? 
                        <h1>Loading...</h1> :
                        <h1>Hello {user.name.split(" ")[0]} 👋</h1> 
                    }
                </div>
            </div>
            <div>
                <img src="./leftMenuButton.svg" alt="" className="w-full" />
            </div>
        </main>
    )
}