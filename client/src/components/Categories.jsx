import { useEffect, useState } from "react"
export default function Categories() {

    const [categories, setCategories] = useState([])

    async function fetchCategories() {
        let response = await fetch("http://localhost:3000/api/categories", {
            method: "GET",
            credentials: "include"
        })
        let [data] = await response.json()
        setCategories(data.categories)
    }

    const capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    useEffect(() => {
        fetchCategories()
    }, [])

    return (
        <main className="flex flex-col gap-[15px] w-full">
            <h1 className="font-[550] text-xl">Food category</h1>
            <div className="flex justify-between items-center">
                {categories.map(category => (
                    <div key={category} className="w-full flex flex-col text-center justify-center items-center gap-[10px]">
                        <img src={`${category}.png`} alt="category" className="w-3/4" />
                        <p className="text-sm">{capitalize(category.split("_").join(" "))}</p>
                    </div>
                ))}
            </div>
        </main>

    )
}