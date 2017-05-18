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
  renderHeaderColumns(){
    const columns=['DATE','FROM','SUBJECT'];
    let c;
    let columnArray = [];
    for(c in columns){
      columnArray.push(<TableHeaderColumn>{columns[c]}</TableHeaderColumn>)
    }
    return columnArray;
  }
  render(){
    return(
      <Table>
        <TableHeader>
          <TableRow>
            {this.renderHeaderColumns()}
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableRowColumn>1</TableRowColumn>
            <TableRowColumn>John Smith</TableRowColumn>
            <TableRowColumn>Employed</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>2</TableRowColumn>
            <TableRowColumn>Randal White</TableRowColumn>
            <TableRowColumn>Unemployed</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>3</TableRowColumn>
            <TableRowColumn>Stephanie Sanders</TableRowColumn>
            <TableRowColumn>Employed</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>4</TableRowColumn>
            <TableRowColumn>Steve Brown</TableRowColumn>
            <TableRowColumn>Employed</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>5</TableRowColumn>
            <TableRowColumn>Christopher Nolan</TableRowColumn>
            <TableRowColumn>Unemployed</TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>
    )
  }
}


export default MailView;