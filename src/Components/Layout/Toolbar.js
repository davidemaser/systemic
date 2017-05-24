/**
 * Created by David Maser on 24/05/2017.
 */
import React,{Component} from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import UserList from "../UserList";
const toolScope={
  mail:{
    primary:true,
    primaryList:["All Messages","Unread Messages","Read Messages","Divider","Archived Messages","Trash"],
    primaryListDefault:"0",
    secondary:true,
    userFilter:true,
    options:false,
    optionsTitle:'Options',
    optionsList:["Download Excel","Help"],
    hintText:'Filter by user'
  },
  tasks:{
    primary:true,
    primaryList:["All Tasks","Open Tasks","My Tasks","Completed Tasks","Refused Tasks","Divider","Following","Unassigned"],
    primaryListDefault:"2",
    secondary:true,
    userFilter:true,
    options:true,
    optionsTitle:'Options',
    optionsList:["Download Excel","Help"],
    hintText:'Filter by name'
  }
};
class AppToolbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: toolScope[this.props.node]['primaryListDefault'] ,
    };
  }

  handleChange = (event, index, value) => this.setState({value}) &console.log(value) ;

  buildMenuItems(level){
    let menu = toolScope[this.props.node][level];
    let menuArray = [];
    let m;
    for(m in menu){
      menuArray.push(
        menu[m] !== 'Divider' ? <MenuItem key={m} value={m} primaryText={menu[m]} /> : <Divider key={m} />
      )
    }
    return menuArray;
  }
  render() {
    return (
      <Toolbar>
        {toolScope[this.props.node]['primary'] === true ?
          <ToolbarGroup firstChild={true}>
          <DropDownMenu value={this.state.value} onChange={this.handleChange}>
            {this.buildMenuItems('primaryList')}
          </DropDownMenu>
        </ToolbarGroup>
            : null}
        {toolScope[this.props.node]['secondary'] === true ?
          <ToolbarGroup>
            {toolScope[this.props.node]['userFilter'] === true ? <UserList type="dropdown" hint={toolScope[this.props.node]['hintText']}/> : null }
            {toolScope[this.props.node]['options'] === true ?<ToolbarTitle text={toolScope[this.props.node]['optionsTitle']} /> : null }
            {toolScope[this.props.node]['options'] === true ?<ToolbarSeparator /> : null }
            {toolScope[this.props.node]['options'] === true ?
            <IconMenu
            iconButtonElement={
              <IconButton touch={true}>
                <NavigationExpandMoreIcon />
              </IconButton>
            }
          >
              {this.buildMenuItems('optionsList')}
          </IconMenu>
              : null }
        </ToolbarGroup>
            :null}
      </Toolbar>
    );
  }
}

export default AppToolbar;