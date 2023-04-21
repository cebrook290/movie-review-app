import React from "react";

export default class Review extends React.Component {
    render(){
        return (
            <div className='card w-75'>
                <div className='card-header bg-info text-white'>
                    {this.props.username} {this.props.date}
                    </div>
                <div className="card-body">
                    {this.props.content}
                    </div>
                <div className="card-footer">
                    <LikeButton/> <ReplyButton/>
                </div>
            </div>
        )
    }
}