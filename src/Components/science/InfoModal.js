import React, { Component } from 'react';
import Modal from '@material-ui/core/Modal';



export default class InfoModal extends Component {
  // getModalStyle is not a pure function, we roll the style only on the first render

  state = {
    open: true
  }

 handleOpen = () => {
    this.setSate({open: true});
    console.log("Modal should open");
  };

  

  handleClose = () => {
    this.setState({open: false});
    console.log("Modal should close")
  };

  body = () => {
    return (
        <div className="paper">
        <h2 id="simple-modal-title">Text in a modal</h2>
        <p id="simple-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </p>
        </div>
    )
  }

    render() {
        return (
            <div>
            <button type="button" onClick={this.handleOpen}>
                Open Modal
            </button> 
             
            <div>
            <Modal
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            >
            {this.body}
            </Modal></div>
            </div>
        );
    }
}