import { Component } from "react";
import { Movie } from './Movie';
import { Rented } from "./Rented";

export class Catalog extends Component {

    render() {
        const budget = this.props.budget
        const movies = this.props.movies

        return (
            <div>
                <div>
                    <input id="search-bar" placeholder="Search" />
                    <span>Budget: &#36;{budget}</span>
                    <div>Rented:
                        <Rented movies={movies} rented={this.props.rented} />
                    </div>
                    <div id="catalog-container">Catalog:
                        <div>
                            {movies.map((movie => {
                                return (
                                    <Movie movie={movie} rented={this.props.rented} />
                                )
                            }))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }


}