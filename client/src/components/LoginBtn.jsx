import { useEffect } from "react"

export default function LoginBtn({ name, icon, color, validate }) {

    function validateWith(service) {
		window.open(`http://localhost:3000/login/auth/${service}`, "_self")
	}

    return (
        <button className={`oauthButton ${color}`} onClick={() => validateWith(validate)}>
            <img src={icon} alt="icon" className="w-6 h-6"/>
            Continúa con {name}
        </button>
    )
}