import { useState, useEffect } from 'react'

import ProfileHeader from '../components/ProfileHeader.jsx'
import SearchBar from '../components/SearchBar.jsx'
import Categories from '../components/Categories.jsx'

export default function Home() {

    const [foods, setFoods] = useState()

    async function fetchFoods() {
        let response = await fetch("http://localhost:3000/api/foods", {
            method: "GET",
            credentials: "include"
        })
        let data = await response.json()
        setFoods(data)
    }

    useEffect(() => {
        fetchFoods()
    }, [])

    const capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    return (
        <main className="bg-[#FFF] p-5">
            <section className='py-3'>
                <ProfileHeader />
            </section>
            <section className=''>
                <SearchBar />
            </section>
            <section>
                <Categories />
            </section>

            <section className='flex flex-col gap-16 w-full mt-10'>
                {foods && foods.map(food => (
                    <div key={food._id} className="flex flex-col justify-between shadow-2xl border-2 border-[#93D8A2] w-full h-[190px] rounded-3xl p-3">
                        <div className='flex justify-between relative'>
                            <p className='bg-[#93D8A2] rounded-lg p-1.5 font-[500]'>{capitalize(food.category.split("_").join(" "))}</p>
                            <img src={food.img} alt="food" className="absolute right-0 -bottom-[100px] w-1/2" />
                        </div>

                        <div className='flex justify-between'>
                            <div className='w-[70%]'>
                                <h1 className=' font-[550] text-xl'>{food.name}</h1>
                                <p className='text-gray-500'>{food.ingredients.join(", ")}</p>
                            </div>
                            <div className='flex items-end'>
                                <div className='flex items-center'>
                                    <img src="./calories.svg" className='w-8' />
                                    <p className='text-lg font-[450]'>{food.calories} kcal</p>

                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </main>
    )
}