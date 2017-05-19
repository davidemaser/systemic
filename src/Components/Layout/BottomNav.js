/**
 * Created by David Maser on 18/05/2017.
 */
import React, {Component} from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import MapsPersonPin from 'material-ui/svg-icons/maps/add-location';
import AppNav from 'material-ui/svg-icons/navigation/apps';

class BottomNav extends Component {
  constructor(props){
    super(props);
    this.state={
      options:[
        {
          icon:<AppNav />,
          label:'APPS'
        },
        {
          icon:<FontIcon className="material-icons">favorite</FontIcon>,
          label:'FAVORITES'
        },
        {
          icon:<MapsPersonPin />,
          label:'MAPS'
        }
      ]
    }
  }

  buildIconRow(){
    let options = this.state.options;
    let optionsArray = [];
    let o;
    for(o in options){
      optionsArray.push(
        <Tab key={o} icon={options[o].icon} label={options[o].label}/>
      )
    }
    return optionsArray;
  }

  render() {
    return (
      <Tabs>
        {this.buildIconRow()}
      </Tabs>
    )
  }

}

export default BottomNav;