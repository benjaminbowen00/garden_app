import React, {Component} from 'react';
//import DatePicker from "react-datepicker";
import DatePicker from 'react-date-picker';



export default class CreatePlant extends Component{

  constructor(props){
    super(props);

    this.onChangePlantName = this.onChangePlantName.bind(this);
    this.onChangePlantNumber = this.onChangePlantNumber.bind(this);
    this.onChangePlantingDate = this.onChangePlantingDate.bind(this);
    this.onChangeFloweringDate = this.onChangeFloweringDate.bind(this);
    this.onChangePlantDescription = this.onChangePlantDescription.bind(this);

    this.state = {
      plant_name: '',
      plant_number: '',
      plant_planting_date: new Date(),
      plant_flowering_date: '',
      plant_description: '',

    }
  }

  onChangePlantName(e){
    this.setState({
      plant_name: e.target.value
    });
  }

  onChangePlantNumber(e){
    this.setState({
      plant_number: e.target.value
    });
  }
  onChangePlantingDate(date){
    this.setState({
      plant_planting_date: date
    });
  }
  onChangeFloweringDate(e){
    this.setState({
      plant_flowering_date: e.target.value
    });
  }
  onChangePlantDescription(e){
    this.setState({
      plant_description: e.target.value
    });
  }
  onSubmit(e){
    e.preventDefault();

    //onsubmit logic
    console.log('Form submitted');
    console.log(`plant: ${this.state.plant_name}`);
    this.setState({
      plant_name: '',
      plant_number: '',
      plant_planting_date: '',
      plant_flowering_date: '',
      plant_description: ''
    })
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

          <div>
          <DatePicker
          value={this.state.plant_planting_date}
          onChange={this.onChangePlantingDate}
          />
          </div>


          <div className="form-group">
              <input type="submit" value="Create Todo" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}
