import { useState } from "react"
import Swal from "sweetalert2"

import SignUpLabel from "../components/SignUpLabel.jsx"

export default function SignUp() {

    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleName = (e) => { setName(e.target.value) }
    const handleUsername = (e) => { setUsername(e.target.value) }
    const handleEmail = (e) => { setEmail(e.target.value) }
    const handlePassword = (e) => { setPassword(e.target.value) }

    async function handleSubmit() {

        if(name === "" || username === "" || email === "" || password === "") return Swal.fire({
            title: 'Error',
            text: "All fields are required",
            icon: 'error',
            confirmButtonText: 'Ok'
        })

        try {
            let newUser= {
                name,
                username,
                img: "default.png",
                email,
                provider: "email",
                password
            }
            let res = await fetch("http://localhost:3000/login/signup", {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newUser),
            })

            res = await res.json()
            if(!res.authenticated){
                return Swal.fire({
                    title: 'Error',
                    text: res.msj,
                    icon: 'error',
                    confirmButtonText: 'Ok'
                })
            }

            Swal.fire({
                title: 'Success',
                text: res.msj,
                icon:'success',
                confirmButtonText: 'Login'
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = "http://localhost:4000"
                }
            })
        }catch(err) {
            Swal.fire({
                title: 'Error',
                text: err.msj,
                icon: 'error',
                confirmButtonText: 'Ok'
            })
        }
    }

    return (
        <main className="w-screen h-screen flex justify-center items-center bg-[#1E1E1E]">
            <div className="p-[20px] bg-[#d3d3d3] flex flex-col align-start justify-center gap-[20px] radius-[5px] border-[2px] border-[#323232] shadow-[4px_4px_#93D8A2]">
                <p className='text-[#323232] font-bold text-[20px] mb-[15px] flex flex-col'>
                    Welcome
                    <span className='text-[#666] font-semibold text-[17px]'>Sign up to continue</span>
                </p>

                <article className="flex flex-col gap-[20px]">
                    <section>
                        <SignUpLabel label={"Name"} />
                        <input
                            onChange={handleName}
                            type="text"
                            placeholder="Insert your name"
                            name="name"
                            className="w-full h-10 rounded border-2 border-main-color bg-bg-color shadow-[4px_4px_var(--main-color)] text-sm font-semibold text-font-color p-1.5 outline-none"
                        />
                    </section>
                    <section>
                        <SignUpLabel label={"Username"} />
                        <input
                            onChange={handleUsername}
                            type="text"
                            placeholder="Insert your username"
                            name="username"
                            className="w-full h-10 rounded border-2 border-main-color bg-bg-color shadow-[4px_4px_var(--main-color)] text-sm font-semibold text-font-color p-1.5 outline-none"
                        />
                    </section>
                    <section>
                        <SignUpLabel label={"Email"} />
                        <input
                            onChange={handleEmail}
                            type="email"
                            placeholder="Insert your email"
                            name="email"
                            className="w-full h-10 rounded border-2 border-main-color bg-bg-color shadow-[4px_4px_var(--main-color)] text-sm font-semibold text-font-color p-1.5 outline-none"
                        />
                    </section>
                    <section>
                        <SignUpLabel label={"Password"} />
                        <input
                            onChange={handlePassword}
                            type="password"
                            placeholder="Insert yout password"
                            name="password"
                            className="w-full h-10 rounded border-2 border-main-color bg-bg-color shadow-[4px_4px_var(--main-color)] text-sm font-semibold text-font-color p-1.5 outline-none"
                        />
                    </section>
                </article>

                <button onClick={handleSubmit} className="oauthButton mt-10">
                    <div className="flex gap-2">
                        <p>Continue</p>
                        <img src="./icon-continueLogin.svg" alt="Continuar" />
                    </div>
                </button>
				<span className='text-center'>Already have an account? <a href="/login" className='underline'>Sign In</a></span>

            </div>
        </main>
    )
}