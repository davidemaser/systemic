/**
 * Created by David Maser on 17/05/2017.
 */
import React,{Component} from 'react';
const typeMap = {
  address:{
    home:{
      schema:['street','city','state','zip','country']
    },
    work:{
      schema:['street','city','state','zip','country']
    }
  },
  phone:{
    home:{
      schema:['number']
    },
    work:{
      schema:['number']
    },
    cell:{
      schema:['number']
    }
  }
};
class UserView extends Component{
  constructor(props){
    super(props);
    this.state={
      data:this.props.data
    }
  }

  formatObject(data,type){
    let processType = typeMap[type];
    let objArray = [];
    let n;
    for(n in data){
      objArray.push(<div>{n} {data[n]}</div>)
    }
    /*return(
      <div>
        {objArray}
      </div>
    )*/
  }

  renderUserView() {
    let rootNode = this.props.nodes['root'];
    let userNode = this.props.nodes['user'];
    let userData = this.state.data[rootNode][userNode];
    let userArray = [];
    let u;
    for(u in userData) {
      userArray.push(<div key={u} className="user-block">
        {typeof userData[u] === 'object' ? this.formatObject(userData[u],u) : <div className="user-item">{userData[u]}</div>}
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