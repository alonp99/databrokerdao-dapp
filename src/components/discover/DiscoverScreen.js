import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { Grid, Cell, List, ListItem } from 'react-md';

import Toolbar from '../generic/Toolbar';
import Filter from './Filter'

export default class DiscoverScreen extends Component {
  render() {
    return (
      <div>
        <Toolbar showTabs={true} />
        <Grid className="" noSpacing>
          <Cell size={2} className="" style={{position:"absolute", height:"100%", backgroundColor:"white", paddingTop:"60px", overflowY:"auto"}}>
            <Filter />
            <List>
              <ListItem primaryText="Temp Sensor Falconplein" />
              <ListItem primaryText="CO2 sensor Volkswagen" />
              <ListItem primaryText="Windsensor Kathedraal" />
              <ListItem primaryText="Temp Sensor Falconplein" />
              <ListItem primaryText="CO2 sensor Volkswagen" />
              <ListItem primaryText="Windsensor Kathedraal" />
              <ListItem primaryText="Temp Sensor Falconplein" />
              <ListItem primaryText="CO2 sensor Volkswagen" />
              <ListItem primaryText="Windsensor Kathedraal" />
              <ListItem primaryText="Temp Sensor Falconplein" />
              <ListItem primaryText="CO2 sensor Volkswagen" />
              <ListItem primaryText="Windsensor Kathedraal" />
            </List>
          </Cell>
          <Cell size={10} style={{position:"absolute", right:"0", height:"100%", backgroundColor:"blue"}}>
          </Cell>
        </Grid>
      </div>
    );
  }
}