import React from 'react';

function SeriesCard(props) {
    return (
        <div className="card">
            <div className="card-content">
                <div className="media">
                    <div className="media-left">
                        <img
                            className="image is-48x48"
                            src="http://static.tvmaze.com/uploads/images/medium_portrait/0/2400.jpg"
                            alt="Series"
                        />
                    </div>
                    <div className="media-content">
                        <p className="title is-4">
                            Breaking Bad
                        </p>
                    </div>
                </div>

                <div className="content">
                    <div>
                        <span className="tag is-dark">
                            Ended
                        </span>
                    </div>
                    <div>
                        Breaking Bad follows protagonist Walter White, a chemistry teacher who lives in New Mexico with his wife and teenage son who has cerebral palsy. White is diagnosed with Stage III cancer and given a prognosis of two years left to live. With a new sense of fearlessness based on his medical prognosis, and a desire to secure his family's financial security, White chooses to enter a dangerous world of drugs and crime and ascends to power in this world. The series explores how a fatal diagnosis such as White's releases a typical man from the daily concerns and constraints of normal society and follows his transformation from mild family man to a kingpin of the drug trade.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SeriesCard;

/**
 * Exercise #2 - Props
 * Pass props to the SeriesCard component and use them instead of hardcoded information
 * You have max 10 minutes for doing this
 */
