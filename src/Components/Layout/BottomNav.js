/**
 * Created by David Maser on 18/05/2017.
 */
import React, {Component} from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import AppNav from 'material-ui/svg-icons/navigation/apps';
import ListView from 'material-ui/svg-icons/action/list';
import TaskFollows from 'material-ui/svg-icons/action/supervisor-account';
import TaskLabels from 'material-ui/svg-icons/action/turned-in';
import AppTheme from 'material-ui/svg-icons/device/wallpaper';

class BottomNav extends Component {
  constructor(props){
    super(props);
    this.state={
      item:this.props.item,
      options:{
        default:[
          {
            icon:<AppNav />,
            label:'APPS'
          },
          {
            icon:<FontIcon className="material-icons">favorite</FontIcon>,
            label:'FAVORITES'
          },
          {
            icon:<AppTheme />,
            label:'THEME'
          }
        ],
        tasks:[
          {
            icon:<ListView />,
            label:'LIST VIEW'
          },
          {
            icon:<TaskFollows />,
            label:'FOLLOWING'
          },
          {
            icon:<TaskLabels />,
            label:'LABELS'
          }
        ]
      }
    };
    this.buildIconRow = this.buildIconRow.bind(this);
  }

  buildIconRow(){
    let options = this.state.options[this.props.item];
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