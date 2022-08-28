import { Component } from "react";
import { Movie } from './Movie';
import { Rented } from "./Rented";

export class Catalog extends Component {

    filterMovies = (event) => {
        this.props.filterMovies(event.target.value)
    }

    render() {
        const budget = this.props.budget
        let movies = this.props.movies
        return (
            <div>
                <div>
                    <input id="search-bar" placeholder="Search" value={this.props.searchMovieText} onChange={this.filterMovies}/>
                    <span>Budget: &#36;{budget}</span>
                    <div>Rented:
                        <Rented movies={movies} rented={this.props.rented} />
                    </div>
                    <div id="catalog-container">Catalog:
                        <div>
                            {movies.map((movie => {
                                return (
                                    <Movie movie={movie} rented={this.props.rented} budget={budget}/>
                                )
                            }))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }


}