/**
 * Created by David Maser on 24/05/2017.
 */
import React,{Component} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */
class ModalView extends Component {
  constructor(props){
    super(props);
    this.state = {
      open: this.props.modalVisible,
      modalContent:this.props.modalContent
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen(){
    this.setState({open: true});
  };

  handleClose(){
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.props.modalClick}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div>
        <RaisedButton label="Dialog" onTouchTap={this.props.modalClick} />
        <Dialog
          title={this.state.modalContent[0]}
          actions={actions}
          modal={true}
          open={this.props.modalVisible}
          onRequestClose={this.props.modalClick}
        >
          {this.state.modalContent[1]}
        </Dialog>
      </div>
    );
  }
}

export default ModalView;