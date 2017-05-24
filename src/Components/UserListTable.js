/**
 * Created by David Maser on 24/05/2017.
 */
import React,{Component} from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const userTableHeader=['Name','Username'];

class UserListTable extends Component{
  constructor(props){
    super(props);
    this.state={
      data:this.props.data,
      multiSelectable: true,
      enableSelectAll: true,
      deselectOnClickaway: false,
      showRowHover: true,
      stripedRows: true
    }
  }

  buildHeader(){
    let userTableArray = [];
    let u;
    for(u in userTableHeader){
      userTableArray.push(<TableHeaderColumn key={u}>{userTableHeader[u]}</TableHeaderColumn>)
    }
    return userTableArray;
  }

  buildRows(){
    let userArray = [];
    let userData = this.props.data;
    let a;
    for(a in userData){
      userArray.push(
        <TableRow key={a}>
        <TableRowColumn>{userData[a].lastName}, {userData[a].firstName}</TableRowColumn>
        <TableRowColumn>{userData[a].username}</TableRowColumn>
        </TableRow>
      )
    }

    return userArray;
  }

  render(){
    return(
      <div>
        <div className="user-view-intro">{this.props.title}</div>
      <Table selectable={this.state.selectable}
             multiSelectable={this.state.multiSelectable}>
        <TableHeader enableSelectAll={this.state.enableSelectAll}>
          <TableRow>
            {this.buildHeader()}
          </TableRow>
        </TableHeader>
        <TableBody deselectOnClickaway={this.state.deselectOnClickaway}
                                      showRowHover={this.state.showRowHover}
                                      stripedRows={this.state.stripedRows}>
            {this.buildRows()}
        </TableBody>
      </Table>
      </div>
    )
  }
}

export default UserListTable;