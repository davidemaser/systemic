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
import TaskAddItem from "./TaskAddItem";

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
      showCheckboxes: true
    };
  }
  renderHeaderColumns(){
    const columns=['DATE','ASSIGNED BY','TITLE','PRIORITY'];
    let c;
    let columnArray = [];
    for(c in columns){
      columnArray.push(<TableHeaderColumn key={c}>{columns[c]}</TableHeaderColumn>)
    }
    return columnArray;
  }
  renderTableRows(){
    let list = this.props.data[this.props.nodes['root']][this.props.nodes['tasks']];
    let listArray = [];
    let l;
    for(l in list){
      listArray.push(
        <TableRow key={l} data={list[l]} className={list[l]['priority']}>
          <TableRowColumn>{list[l]['date'].created}</TableRowColumn>
          <TableRowColumn>{list[l]['assigner']}</TableRowColumn>
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
        <TableBody>
          {this.renderTableRows()}
        </TableBody>
      </Table>
      </div>
    )
  }
}


export default TaskView;