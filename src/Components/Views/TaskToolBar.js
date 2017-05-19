/**
 * Created by David Maser on 19/05/2017.
 */
import React,{Component} from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

class TaskToolBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 3,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, index, value){
    this.setState({value:value});
  }

  render() {
    return (
      <Toolbar>
        <ToolbarGroup firstChild={true}>
          <DropDownMenu value={this.state.value} onChange={this.handleChange}>
            <MenuItem value={1} primaryText="All Broadcasts" />
            <MenuItem value={2} primaryText="All Voice" />
            <MenuItem value={3} primaryText="All Text" />
            <MenuItem value={4} primaryText="Complete Voice" />
            <MenuItem value={5} primaryText="Complete Text" />
            <MenuItem value={6} primaryText="Active Voice" />
            <MenuItem value={7} primaryText="Active Text" />
          </DropDownMenu>
        </ToolbarGroup>
        <ToolbarGroup>
          <RaisedButton label="Create Project" primary={true} />
        </ToolbarGroup>
      </Toolbar>
    );
  }
}

export default TaskToolBar