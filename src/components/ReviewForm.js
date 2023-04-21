import React from 'react'
import uuid4 from 'uuid4'
import Stars from './Stars'

export default function ReviewForm({editing, setEditing, form, reviews, setForm, setReviews}) {
    
    
    
    const handleChange = e => {
        const {name, value} = e.target
        setForm({...form, [name]: value})
    };

    const handleSubmit = e => {
        e.preventDefault();
        setReviews([...reviews, form]);
        setForm({movie:"", review:"", id: uuid4()})
    };

    const handleUpdate = e => {
        e.preventDefault()
        setEditing(false)
        const updatedReviews = reviews.map(review => review.id ===form.id ? form : review)
        setReviews(updatedReviews)
        setForm({movie:"", review:"", id: uuid4()})
    }

    return (
        <>
        <div className='container'>
            <form className='form-group' onSubmit={editing ? handleUpdate : handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='movie' className='form-label'>Review Title</label>
                        <input
                            type='text'
                            className='form-control'
                            placeholder='Review Title'
                            id='movie'
                            name='movie'
                            autoComplete='off'
                            value={form.movie}
                            onChange={handleChange} />
                    </div>
                    <div className='mb-3'>      
                        <label htmlFor='review' className='form-label'>Review</label>
                        <textarea
                            value={form.review}
                            className='form-control'
                            placeholder='What were your thoughts?'
                            id='review'
                            name='review'
                            autoComplete='off'
                            rows={3}
                            onChange={handleChange} />
                    </div>      
                    <button className='btn btn-primary' type='submit'>{editing ? "Update" : "Submit"}</button>
                    </form>
                    
        </div>
        {/* <div className='container'>
            <form className='form-group' onSubmit={editing ? handleUpdate : handleSubmit}>
                <h2>Leave a Review</h2>
                <label htmlFor='movie'>Review Title</label>
                <input
                    type='text'
                    placeholder='Review Title'
                    id='movie'
                    name='movie'
                    autoComplete='off'
                    value={form.movie}
                    onChange={handleChange} />
                <label htmlFor='review'>Review</label>
                <textarea
                    value={form.review}
                    placeholder='What were your thoughts?'
                    id='review'
                    name='review'
                    autoComplete='off'
                    onChange={handleChange} />
                
                <button className='btn btn-primary' type='submit'>{editing ? "Update" : "Submit"}</button>
            </form>
        </div> */}


        </> 
    )
    
}


