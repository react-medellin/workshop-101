import React from 'react';
import axios from 'axios';

import SeriesCard from 'components/SeriesCard/SeriesCard';
import SearchForm from 'components/SearchForm/SearchForm';


class App extends React.Component {

    constructor() {
        super();

        this.state = {
            query: '',
            series: [],
            loading: false,
            error: ''
        };
    }

    getSeriesDataFromAPI = () => {
        // Adding https://cors-anywhere.herokuapp.com/ to byPass https only restriction on github pages
        axios.get(`https://cors-anywhere.herokuapp.com/http://api.tvmaze.com/search/shows?q=${this.state.query}`)
            .then(result => {
                this.setState({
                    series: result.data,
                    loading: false,
                    error: ''
                });
            })
            .catch(err => {
                this.setState({
                    series: [],
                    loading: false,
                    error: err.message
                });
            });
    }

    handleSearchFormSubmit = (searchFormValue) => {
        this.setState({
            query: searchFormValue,
            loading: true,
            series: [],
            error: ''
        }, this.getSeriesDataFromAPI);
    }

    renderSeries() {
        return this.state.series.map((serie) => {
            const show = serie.show;

            return (
                <div
                    className="column is-4"
                    key={show.id}
                >
                    <SeriesCard
                        image={show.image.medium}
                        title={show.name}
                        status={show.status}
                        description={{
                            __html: show.summary
                        }}
                    />
                </div>
            );
        });
    }

    render() {
        return (
            <div className="section">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-6">
                            {
                                !!this.state.error.length &&
                                <article className="message is-danger">
                                    <div className="message-body">
                                        {this.state.error}
                                    </div>
                                </article>
                            }
                            <SearchForm
                                onSubmit={this.handleSearchFormSubmit}
                                loading={this.state.loading}
                            />
                            {
                                !!this.state.query &&
                                <div>
                                    You searched for: {this.state.query}
                                </div>
                            }
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="columns is-multiline">
                        {this.renderSeries()}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
