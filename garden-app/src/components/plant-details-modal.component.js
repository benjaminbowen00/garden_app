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

  plantingToFlowering(date1, date2){

  var diff =(date2 - date1) / 1000;
  diff /= (60 * 60 * 24 * 7);
  return Math.round(diff);
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
            {this.props.plant_name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          


          <table>
          <thead>
          </thead>
          <tbody className="table">

              <tr>
                  <th>Plant number</th>
                  <td>{this.props.plant_number}</td>
              </tr>
              <tr>
                  <th>Planting date</th>
                  <td>{new Date(this.props.plant_planting_date).toLocaleDateString('en-GB')}</td>
              </tr>
              <tr>
                  <th>Flowering date</th>
                  <td>{new Date(this.props.plant_flowering_date).toLocaleDateString('en-GB')}</td>
              </tr>
              <tr>
                  <th>Planting to flowering:</th>
                  <td>{this.plantingToFlowering(new Date(this.props.plant_planting_date),new Date(this.props.plant_flowering_date))} weeks</td>
              </tr>
              <tr>
                  <th>Description</th>
                  <td>{this.props.plant_description}</td>
              </tr>
          </tbody>
      </table>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={this.props.onHide}>Close</button>
        </Modal.Footer>
      </Modal>
    );
  }
}
