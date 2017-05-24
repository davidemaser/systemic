/**
 * Created by David Maser on 24/05/2017.
 */
import React,{Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class UserListDropDown extends Component{
  constructor(props){
    super(props);
    this.state={
      data:this.props.data,
      values: [],
      hint:this.props.hint || "select a name"
    }
  }

  handleChange = (event, index, values) => this.setState({values});

  buildUserList(){
    let userArray = [];
    let userData = this.props.data;
    let a;
    for(a in userData){
      userArray.push(
        {value:a,name:userData[a].firstName+' '+userData[a].lastName}
      )
    }
    return userArray;
  }

  menuItems(persons) {
    return persons.map((person) => (
      <MenuItem
        key={person.value}
        insetChildren={true}
        checked={this.state.values.indexOf(person.value) > -1}
        value={person.value}
        primaryText={person.name}
      />
    ));
  }

  render() {
    return (
      <SelectField
        multiple={true}
        hintText={this.state.hint}
        value={this.state.values}
        onChange={this.handleChange}
        floatingLabelText={this.props.title}
      >
        {this.menuItems(this.buildUserList())}
      </SelectField>
    );
  }
}

export default UserListDropDown;