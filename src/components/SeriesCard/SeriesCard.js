import React from 'react';

function SeriesCard(props) {

    const image = props.image;
    const title = props.title;
    const status = props.status;
    const description = props.description;

    return (
        <div className="card">
            <div className="card-content">
                <div className="media">
                    <div className="media-left">
                        <img
                            className="image is-48x48"
                            src={image}
                            alt={title}
                        />
                    </div>
                    <div className="media-content">
                        <p className="title is-4">
                            {title}
                        </p>
                    </div>
                </div>

                <div className="content">
                    <div>
                        <span className="tag is-dark">
                            {status}
                        </span>
                    </div>
                    <div>
                        {description}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SeriesCard;
