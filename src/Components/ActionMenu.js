/**
 * Created by David Maser on 18/05/2017.
 */
import React, {Component} from 'react';
import Popover, {PopoverAnimationVertical} from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

class ActionMenu extends Component {
  constructor(props){
    super(props);
    this.state={
      open:false
    };
    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
  }
  handleTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault();
    this.setState({
      open: true,
      anchorEl: event.currentTarget
    })
  };

  handleRequestClose() {
    this.setState({
      open: false,
    });
  };

  render() {
    return (
      <Popover
        open={this.handleTouchTap}
        anchorEl={this.state.anchorEl}
        anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        onRequestClose={this.handleRequestClose}
        animation={PopoverAnimationVertical}
      >
        <Menu>
          <MenuItem primaryText="Refresh"/>
          <MenuItem primaryText="Help &amp; feedback"/>
          <MenuItem primaryText="Settings"/>
          <MenuItem primaryText="Sign out"/>
        </Menu>
      </Popover>
    )
  }
}

export default ActionMenu;