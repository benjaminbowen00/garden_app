import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const Plant = props => (
  <tr>
    <td>{props.plant.plant_name}</td>
    <td>{props.plant.plant_number}</td>
    <td>{props.plant.plant_planting_date}</td>
    <td>{props.plant.plant_flowering_date}</td>
    <td>{props.plant.plant_description}</td>
    <td>
      <Link to={"/edit/"+props.plant._id}>Update</Link>
    </td>
  </tr>
)



export default class Square extends Component{

  constructor(props){
  super(props);
  this.state = {plants: [{plant_name:'Helibore', plant_number: '2', plant_planting_date:'01/02/2018', plant_flowering_date:'01/03/2019', plant_description:"Planted loads"}]};
  this._isMounted = false;

}

  plantList(){
  return this.state.plants.map(function(currentPlant, i){
    return <Plant plant={currentPlant} key={i}/>;
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
    </div>
  )
}
}
