/**
 * Created by David Maser on 17/05/2017.
 */
import React,{Component} from 'react';
import {List, ListItem} from 'material-ui/List';
import ContentTasks from 'material-ui/svg-icons/action/assignment';
import Calendar from 'material-ui/svg-icons/action/today';
import UserIcon from 'material-ui/svg-icons/social/person';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentAlerts from 'material-ui/svg-icons/alert/add-alert';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';

class LeftNav extends Component {
  render() {
    return (
      <div>
        <List>
          <ListItem primaryText="Inbox" leftIcon={<ContentDrafts />} />
          <ListItem primaryText="Sent mail" leftIcon={<ContentSend />} />
          <ListItem primaryText="User Settings" leftIcon={<UserIcon />} />
          <ListItem primaryText="Drafts" leftIcon={<ContentTasks />} />
          <ListItem primaryText="Tasks" leftIcon={<Calendar />} />
          <ListItem primaryText="Alerts" leftIcon={<ContentAlerts />} />
        </List>
        <Divider />
        <List>
          <ListItem primaryText="All mail" rightIcon={<ActionInfo />} />
          <ListItem primaryText="Trash" rightIcon={<ActionInfo />} />
          <ListItem primaryText="Spam" rightIcon={<ActionInfo />} />
          <ListItem primaryText="Follow up" rightIcon={<ActionInfo />} />
        </List>
      </div>
    );
  }
}

export default LeftNav;