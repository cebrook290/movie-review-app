import React from 'react'
import { List } from './MovieData'
import Stars from './Stars'
import ReviewFormPrompt from './ReviewFormPrompt';

export default class Movie2 extends React.Component {

  
    
    render() {

            return (
                <> 

                <div className='movList'>
                    <ul> {List.map((item, index) => {
                        return(
                            <li className='movie' key={index}>
                                <div className='card mb-3' style={{maxwidth: 540}}>
                                    <div className='row no-gutters'>
                                        <div className='col-md-4'>
                                            <img src={item.img} alt={item.title} className='card-img'/>
                                        </div>
                                        <div className='col-md-8'>
                                            <div className='card-body'>
                                                <h5 className='card-title'>{item.title}</h5>
                                                <p className='card-text'>{item.synopsis}</p>
                                                <p className="card-text"><small class="text-muted">{item.release}</small></p>
                                                <br></br>
                                                <p><medium>How many starts would you give it?</medium></p>
                                                <Stars />
                                                <br></br>
                                                <p><strong>Leave a review!</strong></p>
                                                <ReviewFormPrompt />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </li>
                        )
                    })}
                    </ul>
                </div>
                </>
            )
        }
    }