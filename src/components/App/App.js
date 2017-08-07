import React from 'react';
import axios from 'axios';

import SeriesCard from 'components/SeriesCard/SeriesCard';
import SearchForm from 'components/SearchForm/SearchForm';


class App extends React.Component {

    constructor() {
        super();

        this.state = {
            query: '',
            series: []
        };
    }

    getSeriesDataFromAPI = () => {
        axios.get(`http://api.tvmaze.com/search/shows?q=${this.state.query}`)
            .then(result => {
                this.setState({
                    series: result.data
                });
            })
            .catch(err => {
                this.setState({
                    series: []
                });
            });
    }

    handleSearchFormSubmit = (searchFormValue) => {
        this.setState({
            query: searchFormValue
        }, this.getSeriesDataFromAPI);
    }

    renderSeries() {
        console.log(this.state.series);

        return this.state.series.map((serie) => {
            /**
             * Exercise
             *
             * Now you should have all series inside this.state.series
             * In this .map we're iterating over each one of the series that the API returned
             *
             * Your task consist on pass the right props to the <SeriesCard /> component
             *
             * If you need to know what's the structure for each serie, you can do
             * console.log(serie);
             *
             * You have 15 minutes to do it
             */

            return (
                <div>Fix me</div>
            );

            // Remove the comments for this return
            // return (
            //     <SeriesCard
            //         key={???}
            //         image={????}
            //         title={???}
            //         status={???}
            //         description={???}
            //     />
            // );
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
