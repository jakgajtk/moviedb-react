import React from 'react';
import {List, ListItem} from 'material-ui/List';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import {config} from '../../configuration/config';
import movieDb from 'themoviedb-javascript-library';

// @todo - refactor to smaller components.

export default class SearchTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            items: []
        };

        this.handleSearch = this.handleSearch.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.successCallback = this.successCallback.bind(this);
    }

    handleSearch() {
        console.log('handling search');
        movieDb.common.api_key = config.apiKey;
        movieDb.search.getMovie(
            {'query': this.state.textValue},
            this.successCallback,
            function() {}
        )
    }

    successCallback(data) {
        let arrayData = JSON.parse(data);
        this.setState({ items: arrayData.results });
    }

    handleTextChange(event) {
        this.setState({textValue: event.target.value})
    }

    render() {
        let listItems = this.state.items.map(function(item) {
            return (
                <ListItem primaryText={item.original_title}/>
            );
        });

        return <div>
                    <TextField hintText="Search for movies" value={this.state.textValue} onChange={this.handleTextChange}/>
                    <RaisedButton
                        label="Search"
                        onClick={this.handleSearch}
                        primary={true}
                    />
                    <Divider />
                    <List>
                        {listItems}
                    </List>
                </div>
    }
 };