import './css/LogIn.css'
import LoginBtn from '../components/LoginBtn.jsx'
export default function LogIn() {

	const loginOptions = [
		{
			name: "Google",
			icon: "./logo-google.svg",
			color: "bg-[#4667fc]",
			validate: "google"
		},
		{
			name: "Github",
			icon: "./logo-github.svg",
			color: "bg-[#696969]",
			validate: "github"
		},
		{
			name: "Discord",
			icon: "./logo-discord.svg",
			color: "bg-[#7289DA]",
			validate: "discord"
		}
	]

	return (
		<main className='w-screen h-screen flex justify-center items-center bg-[#212121]'>
			<div className='w-screen h-screen flex justify-center items-center radius-[1.3rem]'>
				<div className="p-[20px] bg-[#d3d3d3] flex flex-col align-start justify-center gap-[20px] radius-[5px] border-[2px] border-[#323232] shadow-[4px_4px_#323232]">
					<p className='text-[#323232] font-bold text-[20px] mb-[15px] flex flex-col'>Bienvenido<span className='text-[#666] font-semibold text-[17px]'>Inicia sesion para continuar</span></p>


					{loginOptions.map(option => (
						<LoginBtn key={option.name} name={option.name} icon={option.icon} color={option.color} validate={option.validate} />
					))}


					<div className="w-full flex justify-center gap-[5px]">
						<div className='w-[100px] h-[3px] rounded-[5px] bg-[#666]' />
						<span className='text-[#323232] font-semibold'>OR</span>
						<div className='w-[100px] h-[3px] rounded-[5px] bg-[#666]' />
					</div>
					<input type="email" placeholder="Email" name="email" className='w-64 h-10 rounded border-2 border-main-color bg-bg-color shadow-[4px_4px_var(--main-color)] text-sm font-semibold text-font-color p-1.5 outline-none' />
					<button className="oauthButton">
						<div className='flex gap-2'>
							Continúa
							<svg
								className="w-6 h-6"
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth={2}
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path d="m6 17 5-5-5-5" />
								<path d="m13 17 5-5-5-5" />
							</svg>
						</div>
					</button>
				</div>
			</div>
		</main>
	)
}

