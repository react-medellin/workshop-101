import React from 'react';

class SearchForm extends React.Component {
    constructor() {
        super();

        this.state = {
            searchQuery: ''
        };
    }

    handleOnChange = (event) => {
        this.setState({
            searchQuery: event.target.value
        });
    }

    handleOnSubmit = (event) => {
        event.preventDefault();

        // Call function props.onSubmit with the search input value
        this.props.onSubmit(this.state.searchQuery);

        // Reset state.searchQuery to ''
        this.setState({
            searchQuery: ''
        });
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
                        value={this.state.searchQuery}
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
