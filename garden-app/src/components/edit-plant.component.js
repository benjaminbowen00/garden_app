import React, {Component} from 'react';
import axios from 'axios';
import DatePicker from 'react-date-picker';


export default class EditPlant extends Component{

  constructor(props) {
      super(props);

      this.onChangePlantName = this.onChangePlantName.bind(this);
      this.onChangePlantNumber = this.onChangePlantNumber.bind(this);
      this.onChangePlantingDate= this.onChangePlantingDate.bind(this);
      this.onChangeFloweringDate = this.onChangeFloweringDate.bind(this);
      this.onChangePlantDescription = this.onChangePlantDescription.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      //this.deletePlant = this.deletePlant.bind(this);


      this.state = {
        square: '',
        plant_name: '',
        plant_number: '',
        plant_planting_date: '',
        plant_flowering_date: '',
        plant_description: '',
      }
  }

  componentDidMount(){
    axios.get('http://localhost:4000/plants/'+this.props.match.params.id)
    .then(res => {
      this.setState({
        square: res.data.square,
        plant_name: res.data.plant_name,
        plant_number: res.data.plant_number,
        plant_planting_date: res.data.plant_planting_date,
        plant_flowering_date: res.data.plant_flowering_date,
        plant_description: res.data.plant_description,
      })
    })
    .catch(function(error){
      console.log(error);
    })
  }

  onChangePlantName(e){
    this.setState({
      plant_name: e.target.value
    })
  }
  onChangePlantNumber(e){
    this.setState({
      plant_number: e.target.value
    })
  }
  onChangePlantingDate(e){
    this.setState({
      plant_planting_date: e.target.value
    })
  }
  onChangeFloweringDate(e){
    this.setState({
      plant_flowering_date: e.target.value
    })
  }
  onChangePlantDescription(e){
    this.setState({
      plant_description: e.target.value
    })
  }
  onSubmit(e){
    e.preventDefault();
    const obj = {
      square: this.state.square,
      plant_name: this.state.plant_name,
      plant_number: this.state.plant_number,
      plant_planting_date: this.state.plant_planting_date,
      plant_flowering_date: this.state.plant_flowering_date,
      plant_description: this.state.plant_description,
    }
    axios.post('http://localhost:4000/plants/update/'+this.props.match.params.id, obj)
      .then(res => console.log(res.data));

    this.props.history.push('/square'+this.state.square.toString());
  }

  deleteTodo(e){
    console.log("delte todo");
  }


  render(){
    return(

            <div style={{marginTop: 10}}>





              <p>Create a Plant</p>

              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label>Plant Name:</label>
                  <input  type="text"
                          className='form-control'
                          value={this.state.plant_name}
                          onChange={this.onChangePlantName}/>
                </div>
                <div className="form-group">
                  <label>Number of plants:</label>
                  <input  type="number"
                          min="1" max="100"
                          className='form-control'
                          value={this.state.plant_number}
                          onChange={this.onChangePlantNumber}/>
                </div>

                <div className="form-group">
                <label>Planting date</label>
                <DatePicker
                className='input-group date'
                value={this.state.plant_planting_date}
                onChange={this.onChangePlantingDate}
                />
                </div>

                <div className="form-group">
                <label>Flowering date</label>
                <DatePicker
                className='input-group date'
                value={this.state.plant_flowering_date}
                onChange={this.onChangeFloweringDate}
                />
                </div>

                <div className="form-group">
                  <label>Comments:</label>

                  <input  type="text"
                          className='form-control'
                          value={this.state.plant_description}
                          onChange={this.onChangePlantDescription}/>
                </div>


                <div className="form-group">
                    <input type="submit" value="Update plant" className="btn btn-primary" />
                </div>

              </form>
            </div>
    )
  }
}
