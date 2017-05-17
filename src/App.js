import React, {Component} from 'react';
import PanelView from "./Components/Layout/PanelView";
import Request from 'react-http-request';
import LeftNav from "./Components/Layout/LeftNav";
const nodes={
  root:'service',
  user:'user',
  mail:'messages',
  tasks:'tasks'
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewPort: false,
      dataList:null
    };
  }

  render() {
    return (
      <div className="App">
        <section id="nav"><LeftNav/></section>
        <section id="main"><Request
          url='https://davidemaser.github.io/data/temp-systemic.json'
          method='get'
          accept='application/json'
          verbose={true}
        >
          {
            ({error, result, loading}) => {
              if (loading) {
                return <div>loading...</div>;
              } else if (error) {
                return <div>Woh hey hey hey wait a second...</div>;
              } else {
                return(
                  <div>
                <PanelView default={true} nodes={nodes} model="mail" data={result.body}/>
                <PanelView default={true} nodes={nodes} model="user" data={result.body}/>
                  </div>
                )
              }
            }
          }
        </Request>
        </section>
      </div>
    );
  }
}

export default App;
