import React, { useState } from 'react'
import { Star } from 'lucide-react'

export default function StarRating({ initialRating = 0, onChange }) {
    const [rating, setRating] = useState(initialRating)
    const [hover, setHover] = useState(0)

    const handleClick = (value) => {
        setRating(value)
        if (onChange) {
            onChange(value)
        }
    }

    return (
        <div className="flex items-center py-5 gap-2">
            <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                        key={star}
                        className={`w-8 h-8 cursor-pointer ${star <= (hover || rating) ? 'text-[#93D8A2] fill-[#93D8A2]' : 'text-[#93D8A2]'
                            }`}
                        onClick={() => handleClick(star)}
                        onMouseEnter={() => setHover(star)}
                        onMouseLeave={() => setHover(0)}
                    />
                ))}
            </div>
            <span className="text-xl font-semibold text-gray-700">{rating.toFixed(1)}</span>
        </div>
    )
}