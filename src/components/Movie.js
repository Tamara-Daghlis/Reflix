import { Component } from "react";
import { Link } from "react-router-dom";

export class Movie extends Component {

    rented = () => {
        this.props.rented(this.props.movie.id)
    }

    increaseBudget = () => {
        let budget = this.props.budget
        budget += 3
        this.setState({budget})
    }

    render() {
        const movie = this.props.movie
        return (
            <div>
                <p id="title">{movie.title}</p>
                <Link to={`/catalog/${movie.id}`}>
                    <div className='movie-img'><img src={movie.img} /></div>
                </Link>
                {movie.isRented ? <button onClick={this.rented}>-</button> : <button onClick={this.rented}>+</button>}
            </div>
        )
    }
}