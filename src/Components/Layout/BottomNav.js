/**
 * Created by David Maser on 18/05/2017.
 */
import React, {Component} from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import MapsPersonPin from 'material-ui/svg-icons/maps/add-location';
import AppNav from 'material-ui/svg-icons/navigation/apps';

class BottomNav extends Component {

  render() {
    return (
      <Tabs>
        <Tab
          icon={<AppNav />}
          label="APPS"
        />
        <Tab
          icon={<FontIcon className="material-icons">favorite</FontIcon>}
          label="FAVORITES"
        />
        <Tab
          icon={<MapsPersonPin />}
          label="MAPS"
        />
      </Tabs>
    )
  }

}

export default BottomNav;