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
        const buttonClasses = this.props.loading ? 'button is-primary is-loading' : 'button is-primary';

        return (
            <form onSubmit={this.handleOnSubmit}>
                <div className="control is-expanded">
                    <input
                        className="input"
                        type="search"
                        placeholder="Find an user"
                        value={this.state.searchQuery}
                        onChange={this.handleOnChange}
                    />
                </div>
                <div className="control">
                    <button
                        className={buttonClasses}
                        type="submit"
                    >
                        Search Series
                    </button>
                </div>
            </form>
        )
    }
}

SearchForm.defaulProps = {
    loading: false
};

export default SearchForm;
