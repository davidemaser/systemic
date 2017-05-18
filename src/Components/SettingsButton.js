import React,{Component} from 'react';
import IconButton from 'material-ui/IconButton';
import VertButton from 'material-ui/svg-icons/navigation/more-vert';

class SettingsButton extends Component{
  render(){
    return(
        <div className="app-core-settings">
          <IconButton tooltip="Click for more settings"
            tooltipPosition="bottom-left"
                      iconStyle={{fill: '#fff'}}
          ><VertButton/></IconButton>
        </div>

    )
  }
}

export default SettingsButton;