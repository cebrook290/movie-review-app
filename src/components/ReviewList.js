import React, { setState } from "react";

export default class ReviewList extends React.Component {
// array of reviews
    constructor(props)
    {
        super(props);
        this.state = {
            reviews: [{review:'description', stars:5}]
        }
    }

    addNewReview (data) 
    {
        this.setState({review: [...this.state.reviews], data})
    }


    render() {

        {this.state.reviews.map(review => {
            return <Review />
        })}

        <ReviewForm callback = {addNewReview}/>
    }


}