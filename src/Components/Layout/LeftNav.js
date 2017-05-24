/**
 * Created by David Maser on 23/05/2017.
 */
import React,{Component} from 'react';
import {List, ListItem} from 'material-ui/List';
import ContentTasks from 'material-ui/svg-icons/action/assignment';
import ContentBookmarks from 'material-ui/svg-icons/action/bookmark';
import ContentSettings from 'material-ui/svg-icons/action/settings';
import Calendar from 'material-ui/svg-icons/action/today';
import UserIcon from 'material-ui/svg-icons/social/person';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentAlerts from 'material-ui/svg-icons/alert/add-alert';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Divider from 'material-ui/Divider';

class LeftNav extends Component{
  render(){
    return(
      <section id="nav">
        <List>
          <ListItem primaryText="Messages" onClick={()=>{this.props.handleClicked('mail-received')}} leftIcon={<ContentDrafts />} />
          <ListItem primaryText="User Settings" onClick={()=>{this.props.handleClicked('user-settings')}} leftIcon={<UserIcon />} />
          <ListItem primaryText="Notes" leftIcon={<ContentTasks />} />
          <ListItem primaryText="Tasks" onClick={()=>{this.props.handleClicked('tasks')}} leftIcon={<Calendar />} />
          <ListItem primaryText="Reminders" onClick={()=>{this.props.handleClicked('reminders')}} leftIcon={<ContentAlerts />} />
        </List>
        <Divider />
        <List>
          <ListItem primaryText="Notifications" rightIcon={<ActionInfo />} />
          <ListItem primaryText="Bookmarks" rightIcon={<ContentBookmarks />} />
          <ListItem primaryText="Settings" onClick={()=>{this.props.handleClicked('app-settings')}} rightIcon={<ContentSettings />} />

          <Divider />
          <ListItem primaryText={this.props.floorVisible === 'hidden' ? 'Show Footer Menu' : 'Hide Footer Menu'} onClick={()=>{this.props.showFloorMenu()}} />
        </List>
      </section>
    )
  }
}

export default LeftNav;