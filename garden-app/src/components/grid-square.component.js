import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import MyVerticallyCenteredModal from "./plant-details-modal.component.js";

const Plant = props => (
  <tr>
    <td>{props.plant.plant_name}</td>
    <td>{props.plant.plant_number}</td>
    <td>{new Date(props.plant.plant_planting_date).toLocaleDateString('en-GB')}</td>
    <td>{new Date(props.plant.plant_flowering_date).toLocaleDateString('en-GB')}</td>
    <td>{props.plant.plant_description}</td>
    <td>
      <Link to={"/edit/"+props.plant._id}>Update</Link>
    </td>
  </tr>
)



export default class Square extends Component{

  constructor(props){


  super(props);
  this.modalClose= this.modalClose.bind(this);
  this.state = {plants: [],
                modalShow: false
                };
  this._isMounted = false;

}

componentDidMount(){
    this._isMounted=true;
    axios.get('http://localhost:4000/plants/square/'+this.props.match.params.id.toString())

      .then(response => {
        this.setState({plants: response.data});
      })
      .catch(function(err){
        console.log(err);
      })
  }

componentWillUnmount(){
     this._isMounted = false;
}

componentDidUpdate(prevProps, prevState) {
 if(JSON.stringify(prevState) !== JSON.stringify(this.state)) {
   axios.get('http://localhost:4000/plants/square/'+this.props.match.params.id)
     .then(response => {
       if(this._isMounted)
       {
       this.setState({plants: response.data});
       }
       })
     .catch(function(err){
         console.log(err);
     })
 }


}


  plantList(){
  return this.state.plants.map(function(currentPlant, i){
    return <Plant plant={currentPlant} key={i}/>;
  })
}

modalClose(){
  this.setState({
    modalShow: false
  })
}

render(){
  return (
      <div>
        <h3>Plant List</h3>
        <table className="table table-striped" style={{marginTop:20}}>
          <thead>
            <tr>
            <th>Plant Name</th>
            <th>Number of plants</th>
            <th>Date of planting</th>
            <th>Date of flowering</th>
            <th>Description</th>
            <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {this.plantList()}
          </tbody>
        </table>

        <button
        variant="primary"
          onClick={() => this.setState({ modalShow: true })}>
          Launch vertically centered modal
          </button>

          <MyVerticallyCenteredModal
          show={this.state.modalShow}
          onHide={this.modalClose}
          />

      </div>
    )
  }
}
