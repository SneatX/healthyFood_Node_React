import { useState } from "react";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import StarRating from "../components/StarRating.jsx";
import { useNavigate } from "react-router-dom";

export default function Food() {
    const navigate = useNavigate();
    const location = useLocation();
    const { product } = location.state;

    const [starRating, setStarRating] = useState(product.average);
    const [totalRatings, setTotalRatings] = useState(product.ratings.length);

    async function updateStars(number) {
        let res = await fetch("http://localhost:3000/api/stars", {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "id": product._id,
                "newStar": number,
            }),
        })

        res = await res.json()
        if (res.newAverage) {
            setStarRating(res.newAverage)
            setTotalRatings(res.updatedRatings.length)

        }
        else {
            Swal.fire({
                title: 'Error',
                text: "Err from server",
                icon: 'error',
                confirmButtonText: 'Ok'
            })
        }
    }

    return (
        <main className="pt-10 bg-gray-200 relative">
            <img src="../returnArrow.svg" alt="return" className="absolute"  onClick={() => navigate(-1)} />
            <section className="text-center font-[550]">
                <h1 className="text-4xl text-[#93D8A2]">{product.name.split(" ")[0].toUpperCase()}</h1>
                <h1 style={{
                    color: 'white',
                    WebkitTextStroke: '2px black',
                    textStroke: '1px black'
                }}
                    className="text-6xl">{product.name.split(" ").slice(1).join(" ").toUpperCase()}</h1>
            </section>

            <section className="w-full h-[310px] relative">
                <img
                    src={`../${product.img}`}
                    alt="food"
                    className="w-3/4 absolute -top-5 left-0 right-0 mx-auto"
                />
            </section>

            <div className="p-8 bg-white rounded-t-[50px]">
                <section className="flex justify-between w-full">
                    <article>
                        <p className="text-3xl">{product.name}</p>
                        <p className="text-slate-600">{product.ingredients.join(", ")} <span className="underline text-gray-400">Read More</span></p>
                    </article>
                    <article>
                        <p className='bg-[#93D8A2] rounded-lg p-1.5 font-[500]'>{product.category.split("_").join(" ")}</p>
                    </article>

                </section>

                <StarRating initialRating={starRating} onChange={updateStars}></StarRating>
                
                <section className="bg-[#93D8A2] rounded-3xl w-full p-5 flex flex-col gap-5">
                    <div className="w-full flex justify-between items-center">
                        <p className="text-xl">Average</p>
                        <p className="bg-[#ffffff81] border-2 border-white rounded-lg px-5 py-2 font-[500]">{starRating.toFixed(1)}</p>
                    </div>

                    <div className="w-full flex justify-between items-center">
                        <p className="text-xl">Total ratings</p>
                        <p className="bg-[#ffffff81] border-2 border-white rounded-lg px-5 py-2 font-[500]">{totalRatings.toFixed(1)}</p>
                    </div>
                </section>

            </div>

        </main>
    );

}

