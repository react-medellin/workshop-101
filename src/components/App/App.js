import React from 'react';

import SeriesCard from '../SeriesCard/SeriesCard';

/**
 * Exercise.
 * Print the two different series
 *
 * You have 10 minutes to complete this exercise
 */

class App extends React.Component {

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
                    image="http://static.tvmaze.com/uploads/images/medium_portrait/0/2400.jpg"
                    title="Breaking bad"
                    status="Ended"
                    description="Breaking bad description"
                />
            );
        });
    }

    render() {
        return (
            <div>
                {this.renderSeries()}
            </div>
        );
    }
}

export default App;
