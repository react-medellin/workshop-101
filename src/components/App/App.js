import React from 'react';
// import axios from 'axios';

import SeriesCard from '../SeriesCard/SeriesCard';
import SearchForm from '../SearchForm/SearchForm';


class App extends React.Component {

    constructor() {
        super();

        this.state = {
            query: '',
            series: []
        };
    }

    getSeriesDataFromAPI = () => {
        /**
         * Exercise
         *
         * Make a GET request to the endpoint http://api.tvmaze.com/search/shows?q=
         * using axios.get https://github.com/mzabriskie/axios#example
         * and use the result to update state.series
         *
         */
        console.log('Querying data...', this.state);
    }

    handleSearchFormSubmit = (searchFormValue) => {
        this.setState({
            query: searchFormValue
        }, this.getSeriesDataFromAPI);
    }

    renderSeries() {
        const series = [
            {
                id: 1,
                image: 'http://static.tvmaze.com/uploads/images/medium_portrait/0/2400.jpg',
                title: 'Breaking Bad',
                status: 'Ended',
                description: 'Breaking Bad description...'
            },
            {
                id: 2,
                image: 'http://static.tvmaze.com/uploads/images/medium_portrait/120/301311.jpg',
                title: 'Ozark',
                status: 'Running',
                description: 'Ozark description...'
            },
            {
                id: 3,
                image: 'http://static.tvmaze.com/uploads/images/medium_portrait/99/249188.jpg',
                title: 'American Gods',
                status: 'Running',
                description: 'American Gods description...'
            }
        ];

        return series.map((serie) => {
            return (
                <SeriesCard
                    key={serie.id}
                    image={serie.image}
                    title={serie.title}
                    status={serie.status}
                    description={serie.description}
                />
            );
        });
    }

    render() {
        return (
            <div>
                <SearchForm
                    onSubmit={this.handleSearchFormSubmit}
                />
                {
                    !!this.state.query &&
                    <div>
                        You searched for: {this.state.query}
                    </div>
                }
                {this.renderSeries()}
            </div>
        );
    }
}

export default App;
