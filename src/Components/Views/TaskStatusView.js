/**
 * Created by David Maser on 24/05/2017.
 */
import React,{Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class TaskStatusView extends Component{
  constructor(props){
    super(props);
    this.state={
      value:1
    }
  }
  handleChange = (event, index, value) => this.setState({value});
  buildItems(){
    let itemArray = [];
    let items = this.props.config.tasks.status;
    let i;
    for(i in items){
      itemArray.push(
        <MenuItem key={i} value={i} primaryText={items[i]} />
      )
    }
    itemArray.sort(function(a,b){
      return a.props.primaryText>b.props.primaryText
    });
    return itemArray;
  }
  render(){
    return(
      <SelectField floatingLabelText="Status" value={this.state.value} onChange={this.handleChange}>
        {this.buildItems()}
      </SelectField>
    )
  }
}

export default TaskStatusView;