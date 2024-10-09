export default function SignUpLabel({ label }) {
    return (
        <div className="w-full flex justify-center items-center gap-[10px]">
            <div className='w-full h-[3px] rounded-[5px] bg-[#666]' />
            <span className='text-[#323232] font-semibold'>{label}</span>
            <div className='w-full h-[3px] rounded-[5px] bg-[#666]' />
        </div>
    )
}