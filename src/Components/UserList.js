/**
 * Created by David Maser on 24/05/2017.
 */
import React,{Component} from 'react';
import Request from 'react-http-request';
import UserListTable from "./UserListTable";

class UserList extends Component{
  constructor(props){
    super(props);
    this.state={
      src:'https://davidemaser.github.io/data/temp-users.json'
    }
  }

  render(){
    return(
      <Request url={this.state.src} method='get' accept='application/json' verbose={false}>
        {
          ({error, result, loading}) => {
            if (loading) {
              return <div>loading...</div>;
            } else if (error) {
              return <div>Woh hey hey hey wait a second...</div>;
            } else {
              return(
                <UserListTable data={result.body.user}/>
              )
            }
          }
        }
      </Request>
    )
  }
}

export default UserList;