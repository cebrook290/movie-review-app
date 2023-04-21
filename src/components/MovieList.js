import React from "react";

export default class MovieList extends React.Component{

    render() {

        return (
            <>
            {this.props.movies.map(movie => {
                return <Movie {...movie}/>
            })}
            </>
        )
    }
}