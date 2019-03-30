import React, {Component} from 'react';
import "react-bootstrap/ModalHeader";
import Modal from 'react-bootstrap/Modal'


export default class MyVerticallyCenteredModal extends Component {
  constructor(props){
    super(props)
    this.modalToggle = this.modalToggle.bind(this);

  this.state = {
  modalOpened: false
  }
  }




  modalToggle(){
    this.setState({
      modalOpened: !this.state.modalOpened
    });
  }

  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>{this.props.hello}</p>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={this.props.onHide}>Close</button>
        </Modal.Footer>
      </Modal>
    );
  }
}
