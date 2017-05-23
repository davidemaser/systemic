/**
 * Created by David Maser on 19/05/2017.
 */
import React,{Component} from 'react';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import AddTask from "../AddTask";

class TaskToolBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 3,
      show:this.props.show,
      tags:[],
      data:this.props.data
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, index, value){
    this.setState({value:value});
  }

  render() {
    return (
      <Toolbar>
        <ToolbarGroup>
          <AddTask show={this.state.showAddModal} data={this.props.data[this.props.nodes['root']]} onClick={this.props.onClick}/>
        </ToolbarGroup>
      </Toolbar>
    );
  }
}

export default TaskToolBar