import React,{Component} from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import HighPriority from 'material-ui/svg-icons/alert/error';
import MediumPriority from 'material-ui/svg-icons/alert/warning';
import TaskToolBar from "./TaskToolBar";
import AddTask from "../AddTask";

/**
 * A simple table demonstrating the hierarchy of the `Table` component and its sub-components.
 */

class TaskView extends Component{
  constructor(props){
    super(props);
    this.state={
      default:'received',
      selectable: true,
      multiSelectable: true,
      enableSelectAll: true,
      showCheckboxes: true,
      deselectOnClickaway: false,
      data:this.props.data
    };
  }
  renderHeaderColumns(){
    const columns=['DATE','ASSIGNED BY','PROJECT','TITLE','PRIORITY'];
    let c;
    let columnArray = [];
    for(c in columns){
      columnArray.push(<TableHeaderColumn key={c}>{columns[c]}</TableHeaderColumn>)
    }
    return columnArray;
  }

  renderLinkedTasks(args){
    let linkedArray = [];
    let l;
    for(l in args){
      linkedArray.push(<div key={l} data-task-lin={args[l].taskID}>{args[l].title}</div>)
    }
    return linkedArray;
  }
  renderTableRows(){
    let list = this.props.data[this.props.nodes['root']][this.props.nodes['tasks']];
    let listArray = [];
    let l;
    for(l in list){
      listArray.push(
        <TableRow onClick={() => this.addTaskToggle()} key={l} data={list[l]} className={list[l]['priority']}>
          <TableRowColumn>{list[l]['date'].created}</TableRowColumn>
          <TableRowColumn>{list[l]['assigner']}</TableRowColumn>
          <TableRowColumn>{this.renderLinkedTasks(list[l]['linked'])}</TableRowColumn>
          <TableRowColumn>{list[l]['title']}</TableRowColumn>
          <TableRowColumn>{list[l]['priority'] === 'High' ? <HighPriority/> : list[l]['priority'] === 'Medium' ? <MediumPriority/> : null}</TableRowColumn>
        </TableRow>
      )
    }
    return listArray;
  }
  render(){
    return(
      <div>
      <TaskToolBar/>
      <Table selectable={this.state.selectable}
             multiSelectable={this.state.multiSelectable}>
        <TableHeader displaySelectAll={this.state.showCheckboxes}
                     adjustForCheckbox={this.state.showCheckboxes}
                     enableSelectAll={this.state.enableSelectAll}>
          <TableRow>
            {this.renderHeaderColumns()}
          </TableRow>
        </TableHeader>
        <TableBody deselectOnClickaway={this.state.deselectOnClickaway}>
          {this.renderTableRows()}
        </TableBody>
      </Table>
        <AddTask data={this.props.data[this.props.nodes['root']]}/>
      </div>
    )
  }
}


export default TaskView;