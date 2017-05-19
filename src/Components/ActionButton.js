/**
 * Created by David Maser on 17/05/2017.
 */
import React,{Component} from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Popover, {PopoverAnimationVertical} from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

const style = {
  marginRight: 20,
};
const menuItems = {
  mail:[
    {
      label:'New Message',
      handler:''
    },
    {
      label:'Refresh',
      handler:''
    },
    {
      label:'Mark as read',
      handler:''
    },
    {
      label:'Delete',
      handler:''
    }
  ],
  tasks:[
    {
      label:'New Task'
    },
    {
      label:'Delete Task'
    },
    {
      label:'Mark as complete'
    },
    {
      label:'Re-assign Task'
    }
  ]
};
class ActionButton extends Component{
  constructor(props){
    super(props);
    this.state={
      open:false,
      subMenu:this.props.subMenu
    };
    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
  }

  handleTouchTap(event){
    // This prevents ghost click.
    event.preventDefault();
    this.setState({
      open: true,
      anchorEl: event.currentTarget
    })
  };

  handleRequestClose(){
    this.setState({
      open: false,
    });
  };

  setMenuItems(){
    let items = menuItems[this.state.subMenu];
    let itemsArray = [];
    let i;
    for(i in items){
      itemsArray.push(<MenuItem primaryText={items[i].label} />)
    }
    return itemsArray;
  }

  render(){
    return(
      <div>
        <FloatingActionButton onClick={this.handleTouchTap} secondary={true} style={style}>
          <ContentAdd />
        </FloatingActionButton>
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
          animation={PopoverAnimationVertical}
        >
          <Menu>
            {this.setMenuItems()}
          </Menu>
        </Popover>
      </div>
    )
  }
}

export default ActionButton;