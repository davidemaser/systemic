/**
 * Created by David Maser on 17/05/2017.
 */
import React,{Component} from 'react';
import TextField from 'material-ui/TextField';

class UserView extends Component{
  constructor(props){
    super(props);
    this.state={
      data:this.props.data
    }
  }

  formatObject(data){
    let objArray = [];
    let n;
    for(n in data){
      objArray.push(<div>{n} {data[n]}</div>)
    }
  }
  renderUserView() {
    let rootNode = this.props.nodes['root'];
    let userNode = this.props.nodes['user'];
    let userData = this.state.data[rootNode][userNode];
    let userArray = [];
    let u;
    for(u in userData) {
      userArray.push(<div key={u} className="user-block">
        {typeof userData[u] === 'object' ? this.formatObject(userData[u],u) : <div className="user-item">
          <TextField id={`text-field-${u}`} type={u === 'password' ? 'password' : null} floatingLabelText={u}
                       defaultValue={userData[u]}/>
        </div>}
      </div>)
    }
    return userArray;
  }

  render(){
    return(
      <div className="user-view">
        {this.renderUserView()}
      </div>
    )
  }
}

export default UserView;