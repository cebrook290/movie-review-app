import React from "react";

export default class Movie extends React.Component {
    constructor(props)
    {
        super(props);
    }
    render(){
        return(
            <>
                {this.props.name}
                {this.props.synopsis}
                <ReviewList {...props} />
            </>
        )
    }
}