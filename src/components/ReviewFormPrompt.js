import React, { useState } from 'react'
import ReviewForm from './ReviewForm'
import ReviewList from './ReviewList'
import uuid4 from 'uuid4'

export default function ReviewFormPrompt() {
    
    const [reviews, setReviews] = useState ([]);
    const [form, setForm] = useState({movie:"", review:"", id: uuid4()})
    const [editing, setEditing] = useState(false)
  
    return (
        <div>
        <ReviewForm 
            editing={editing}
            form= {form} 
            reviews = {reviews}
            setEditing = {setEditing}
            setForm= {setForm}
            setReviews= {setReviews}/>
        <br></br>
        <ReviewList 
            reviews= {reviews}
            setForm= {setForm} 
            setReviews={setReviews} 
            setEditing= {setEditing}/>
        </div>
  )
}

