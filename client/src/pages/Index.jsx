export default function Index() {

    // function logout() {
    //     window.location.href = 'http://localhost:3000/login/logout'
    // }

    function goToHome(){
        window.location.href = 'http://localhost:4000/home'

    }

    return (
        <main className="w-screen h-screen bg-[#2b292a] flex flex-col justify-between items-center">
            <section className="w-full">
                <img src="./background.svg" alt="background" className="w-full h-full aspect-square" />
            </section>
            <section className="w-full text-7xl font-[550] flex flex-col justify-start gap-5 pl-8">
                <h1 className="text-[#93D8A2]">Eat <span className="text-[#FFFFFF]">Well,</span></h1>
                <h1 className="text-[#93D8A2]">Fell <span className="text-[#FFFFFF]">Well,</span></h1>
                <h1 className="text-[#93D8A2]">Live <span className="text-[#FFFFFF]">Well.</span></h1>
            </section>
            <section className="flex items-center justify-between w-full pb-5 px-9">
                <article className="flex gap-[10px]">
                    <div className="h-[15px] w-[15px] bg-[#626262] rounded-full"></div>
                    <div className="h-[15px] w-[15px] bg-[#626262] rounded-full"></div>
                    <div className="h-[15px] w-[35px] bg-[#9DE8AE] rounded-full"></div>
                </article>

                <article onClick={goToHome} className="bg-gray-500 w-[75px] h-[75px] border-2 border-white rounded-full flex items-center justify-center cursor-pointer">
                    <img src="./rigthArrow.svg" alt="rigthArrow"/>
                </article>
            </section>
        </main>
    )
}
