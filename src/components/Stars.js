import React, { useState } from "react";
import { FaStar } from 'react-icons/fa'

const Stars = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    
    return <div>
        {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;

            return (
                <div className="form-check form-check-inline">
                    <label>
                        <input className="text-center" 
                        type='radio' 
                        name='rating' 
                        value={ratingValue} 
                        onClick={() => setRating(ratingValue)}
                        
                        />
                        <FaStar 
                        className="text-center" id="star"  color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9" } 
                        size={25} 
                        onMouseEnter= {() => setHover(ratingValue)}
                        onMouseLeave= {() => setHover(null)}
                        />
                    </label>
                </div>
            );
        })}  
        {/* <div className="mx-auto">
        <p style={{fontSize: 15 }}>Your raiting is {rating}</p>
        </div> */}
    </div>
}

export default Stars