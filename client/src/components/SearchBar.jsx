import { useState } from "react"

export default function SearchBar(){

    const [inputValue, setInputValue] = useState("")
    const handleInputChange = (e)=>{setInputValue(e.target.value)}

    async function searchFood(){
        let response = await fetch(`http://localhost:3000/api/search?food=${inputValue}`, {
            method: "GET",
            credentials: "include"
        })
        let data = await response.json()
        if(data){
            console.log(data)
        }
    }

    return (
        <main className="flex justify-between items-center w-full gap-5">
            <input value={inputValue} onChange={handleInputChange} type="text" className="shadow-lg p-2 rounded-lg border-[1px] border-gray-200 w-[80%] h-[50px]"  />

            <div onClick={searchFood} className="flex justify-center items-center bg-[#93D8A2] w-[50px] h-[50px] rounded-xl">
                <img src="./search_icon.svg" className="w-2/5" />
            </div>
        </main>
    )
}