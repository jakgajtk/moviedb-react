import React from 'react';
import {List, ListItem} from 'material-ui/List';

export default class SearchTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
    }
     handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return <div>
            <input value="text" value={this.state.value} placeholder="search for movies..." onChange={this.handleChange} />
            <List>
                <ListItem primaryText="example list element"/>
                <ListItem primaryText="example another list element"/>
            </List>
        </div>
    }
 };