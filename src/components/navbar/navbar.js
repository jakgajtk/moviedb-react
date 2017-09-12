import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import SearchTab from '../searchTab/searchTab';

const iconStyles = {
  marginRight: 24,
};

export default class NavBar extends React.Component {
  
  render() {
    return <Tabs>
        <Tab
        icon={<FontIcon className="material-icons" style={iconStyles}>search</FontIcon>}
        label="SEARCH">
        <SearchTab />
        </Tab>
        <Tab
        icon={<FontIcon className="material-icons" style={iconStyles}>favorite</FontIcon>}
        label="FAVORITES">
        </Tab>
        <Tab
        icon={<FontIcon className="material-icons" style={iconStyles}>info</FontIcon>}
        label="ABOUT ME">
        </Tab>
    </Tabs>
  }
};