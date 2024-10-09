import LoginBtn from '../components/LoginBtn.jsx'
import LoginEmail from '../components/LoginEmail.jsx'
import './css/LogIn.css'
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
		<main className='w-screen h-screen flex justify-center items-center bg-[#1E1E1E]'>
			<div className='w-screen h-screen flex justify-center items-center radius-[1.3rem]'>
				<div className="p-[20px] bg-[#d3d3d3] flex flex-col align-start justify-center gap-[20px] radius-[5px] border-[2px] border-[#323232] shadow-[4px_4px_#93D8A2]">
					<p className='text-[#323232] font-bold text-[20px] mb-[15px] flex flex-col'>Welcome<span className='text-[#666] font-semibold text-[17px]'>Sign in to continue</span></p>


					{loginOptions.map(option => (
						<LoginBtn key={option.name} name={option.name} icon={option.icon} color={option.color} validate={option.validate} />
					))}


					<div className="w-full flex justify-center gap-[5px]">
						<div className='w-[100px] h-[3px] rounded-[5px] bg-[#666]' />
						<span className='text-[#323232] font-semibold'>OR</span>
						<div className='w-[100px] h-[3px] rounded-[5px] bg-[#666]' />
					</div>

					<LoginEmail />

					<span className='text-center'>Dont have an account? <a href="/signup" className='underline'>Sign Up</a></span>

				</div>
			</div>
		</main>
	)
}

