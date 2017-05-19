import React,{Component} from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

/**
 * A simple table demonstrating the hierarchy of the `Table` component and its sub-components.
 */

class MailView extends Component{
  constructor(props){
    super(props);
    this.state={
      default:'received',
      selectable: true,
      multiSelectable: true,
      enableSelectAll: true,
      showCheckboxes: true,
      deselectOnClickaway: false
    };
  }
  renderHeaderColumns(){
    const columns=['DATE','FROM','SUBJECT'];
    let c;
    let columnArray = [];
    for(c in columns){
      columnArray.push(<TableHeaderColumn key={c}>{columns[c]}</TableHeaderColumn>)
    }
    return columnArray;
  }
  renderTableRows(){
    let list = this.props.data[this.props.nodes['root']][this.props.nodes['mail']][this.state.default];
    let listArray = [];
    let l;
    for(l in list){
      listArray.push(
        <TableRow key={l} data={list[l]} className={list[l]['read'] === false ? 'unread' : 'read'}>
          <TableRowColumn>{list[l]['date']}</TableRowColumn>
          <TableRowColumn>{list[l]['from']}</TableRowColumn>
          <TableRowColumn>{list[l]['subject'] !== undefined && list[l]['subject'] !== '' ? list[l]['subject'] : 'No Subject'}</TableRowColumn>
        </TableRow>
      )
    }
    return listArray;
  }
  render(){
    return(
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
    )
  }
}


export default MailView;