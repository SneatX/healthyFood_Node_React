import { useState } from "react";
import Swal from 'sweetalert2'

export default function LoginEmail() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    async function handleSubmit() {

        if(email == "" || password == "") return Swal.fire({
            title: 'Error',
            text: "Email or password cant be empty",
            icon: 'error',
            confirmButtonText: 'Ok'
        })

        try {
            let res = await fetch("http://localhost:3000/login/auth", {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password }),
            })
            res = await res.json()
            // console.log(res)
            
            if(!res.authenticated){
                return Swal.fire({
                    title: 'Error',
                    text: res.msj,
                    icon: 'error',
                    confirmButtonText: 'Ok'
                })
            }

            window.location.href = "http://localhost:4000"

        } catch (err) {
            Swal.fire({
                title: 'Error',
                text: err.msj,
                icon: 'error',
                confirmButtonText: 'Ok'
            })
        }
    }

    return (
        <>
            <input
                onChange={handleEmail}
                type="email"
                placeholder="Email"
                name="email"
                className="w-64 h-10 rounded border-2 border-main-color bg-bg-color shadow-[4px_4px_var(--main-color)] text-sm font-semibold text-font-color p-1.5 outline-none"
            />
            <input
                onChange={handlePassword}
                type="password"
                placeholder="Password"
                name="password"
                className="w-64 h-10 rounded border-2 border-main-color bg-bg-color shadow-[4px_4px_var(--main-color)] text-sm font-semibold text-font-color p-1.5 outline-none"
            />

            <button onClick={handleSubmit} className="oauthButton">
                <div className="flex gap-2">
                    <p>Continue</p>
                    <img src="./icon-continueLogin.svg" alt="Continuar" />
                </div>
            </button>

        </>
    );
}
