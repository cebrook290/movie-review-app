import React from 'react'

export default function Review({handleEdit, handleDelete, review}) {
  return (
    <div className='container'>
                <div className='card bg-light mb-3 border-dark mb-3'>
                   <div className='card-body'>
                        <h5 className='card-title'>{review.movie}</h5>
                        <p className='card-text'>{review.review}</p>  
                        <div className='btn-group'>
                            <button type='button' className='btn btn-danger' onClick={() => handleDelete(review.id)}>
                                Delete
                            </button> 
                            <button type='button' className='btn btn-outline-info' onClick={() => handleEdit(review.id)}>
                                Edit
                            </button>                
                        </div>  
                    </div>
                </div> 
                </div>
         
        
    
  )
}
