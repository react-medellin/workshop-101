import React from 'react';

class SearchForm extends React.Component {
    constructor() {
        super();

        this.state = {
            searchQuery: '',
            unTouchedValue: ''
        };
    }

    handleOnChange = (event) => {
        this.setState({
            searchQuery: event.target.value
        }, () => {
            console.log('New State: ', this.state);
        });
    }

    handleOnSubmit = (event) => {
        /**
         * Exercise:
         *
         * 1. Stop the form submit
         * 2. Call onSubmit prop that has been passed to this component
         */
    }

    render() {
        return (
            <form onSubmit={this.handleOnSubmit}>
                <div
                    className="control is-expanded"
                >
                    <input
                        className="input"
                        type="search"
                        placeholder="Find an user"
                        onChange={this.handleOnChange}
                    />
                </div>
                <div
                    className="control"
                >
                    <button
                        className="button is-primary"
                        type="submit"
                    >
                        Search Series
                    </button>
                </div>
            </form>
        )
    }
}

export default SearchForm;
