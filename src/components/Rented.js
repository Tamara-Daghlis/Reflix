
import React, { Component } from 'react';
import { Movie } from './Movie';

export class Rented extends Component {

    render() {
        const movies = this.props.movies
        return (
            <div>
                {movies.map(movie => {
                    if (movie.isRented) {
                        return (
                            <Movie movie={movie} rented={this.props.rented} />
                        )
                    }
                })}
            </div>
        );
    }
}

