import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import MyVerticallyCenteredModal from "./plant-details-modal.component.js";

export default class Plant extends Component{

  constructor(props){
  super(props);
  this.modalClose2= this.modalClose2.bind(this);
  this.state = {modalShow: false};
}

modalClose2(){
  this.setState({
    modalShow: false
  })
}

render(){
  return (
    <tr>
      <td>{this.props.plant.plant_name}</td>
      <td>{this.props.plant.plant_number}</td>
      <td>{new Date(this.props.plant.plant_planting_date).toLocaleDateString('en-GB')}</td>
      <td>{new Date(this.props.plant.plant_flowering_date).toLocaleDateString('en-GB')}</td>
      <td>{this.props.plant.plant_description}</td>
      <td>
      <button
        variant="primary"
        onClick={() => this.setState({ modalShow: true })}
      >
        See Details
      </button>
      <MyVerticallyCenteredModal
        show={this.state.modalShow}
        onHide={this.modalClose2}
        plant_name = {this.props.plant.plant_name}
        plant_number = {this.props.plant.plant_number}
        plant_planting_date = {this.props.plant.plant_planting_date}
        plant_flowering_date = {this.props.plant.plant_flowering_date}
        plant_description = {this.props.plant.plant_description}
      />
      </td>

      <td>
        <Link to={"/edit/"+this.props.plant._id}>Update</Link>
      </td>
    </tr>
    )
  }
}
