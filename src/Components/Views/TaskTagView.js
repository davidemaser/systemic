/**
 * Created by David Maser on 24/05/2017.
 */
import React,{Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class TaskTagView extends Component{
  constructor(props){
    super(props);
    this.state={
      value:1
    }
  }
  handleChange = (event, index, value) => this.setState({value});
  buildItems(){
    let itemArray = [];
    let items = this.props.config.tasks.tags;
    let i;
    for(i in items){
      itemArray.push(
        <MenuItem key={i} value={i} primaryText={items[i]} />
      )
    }
    return itemArray;
  }
  render(){
    return(
      <SelectField floatingLabelText="Tags" value={this.state.value} onChange={this.handleChange}>
        {this.buildItems()}
      </SelectField>
    )
  }
}

export default TaskTagView;