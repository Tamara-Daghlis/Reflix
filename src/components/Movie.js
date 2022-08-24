import { Component } from "react";

export class Movie extends Component {

    rented = () => {
        this.props.rented(this.props.movie.id)
    }

    render() {
        const movie = this.props.movie
        return (
            <div>
                <p id="title">{movie.title}</p>
                <div className='movie-img'><img src={movie.img} /></div>
                {movie.isRented ? <button onClick={this.rented}>-</button> : <button onClick={this.rented}>+</button>}
            </div>
        )
    }

}