/**
 * Created by David Maser on 17/05/2017.
 */
import React,{Component} from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Popover, {PopoverAnimationVertical} from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';

const style = {
  marginRight: 20,
};
const menuItems = {
  mail:[
    {
      label:'New Message',
      attribute:'mail-compose'
    },
    {
      label:'divider'
    },
    {
      label:'Refresh',
      attribute:'mail-received'
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
      label:'New Task',
      attribute:'new-task'
    },
    {
      label:'Delete Task'
    },
    {
      label:'divider'
    },
    {
      label:'Mark as complete'
    },
    {
      label:'Re-assign Task'
    }
  ],
  reminders:[
    {
      label:'New Reminder',
      attribute:'new-reminder'
    },
    {
      label:'Delete Reminder'
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
    let items = menuItems[this.props.subMenu];
    let itemsArray = [];
    let i;
    for(i in items){
      items[i].label === 'divider' ? itemsArray.push(<Divider key={i} />) : itemsArray.push(<MenuItem data-key-route={items[i].attribute} key={i} primaryText={items[i].label} onClick={this.props.onClick} />)
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