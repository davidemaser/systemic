/**
 * Created by David Maser on 17/05/2017.
 */
import React,{Component} from 'react';

class UserView extends Component{
  constructor(props){
    super(props);
    this.state={
      data:this.props.data
    }
  }

  render(){
    return(
      <div className="user-view">
        {JSON.stringify(this.state.data)}
      </div>
    )
  }
}

export default UserView;