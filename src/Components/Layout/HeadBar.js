/**
 * Created by David Maser on 18/05/2017.
 */
import React,{Component} from 'react';
import SettingsButton from "../SettingsButton";

class HeadBar extends Component{
  render(){
    return(
      <div className="app-core-head">{this.props.section}<SettingsButton/></div>
    )
  }
}

export default HeadBar;