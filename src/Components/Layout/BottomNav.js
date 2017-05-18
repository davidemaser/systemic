/**
 * Created by David Maser on 18/05/2017.
 */
import React, {Component} from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';

class BottomNav extends Component {

  render() {
    return (
      <Tabs>
        <Tab
          icon={<FontIcon className="material-icons">phone</FontIcon>}
          label="RECENTS"
        />
        <Tab
          icon={<FontIcon className="material-icons">favorite</FontIcon>}
          label="FAVORITES"
        />
        <Tab
          icon={<MapsPersonPin />}
          label="NEARBY"
        />
      </Tabs>
    )
  }

}

export default BottomNav;