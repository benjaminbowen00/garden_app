import React, {Component} from 'react';
import Plant from './plant-row.component.js';
import axios from 'axios';


export default class SearchResults extends Component{

  constructor(props){
    super(props);

    this.onChangeSearchTerm = this.onChangeSearchTerm.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      search_term: "",
      results_showing: false,
      plant_list: []
    }
  }

  onChangeSearchTerm(e){
    this.setState({
      search_term: e.target.value
    });
  }

  onSubmit(e){
    console.log("inside on submit");
    e.preventDefault();
    axios.get('http://localhost:4000/plants/search/'+this.state.search_term)

      .then(response => {
        this.setState({plant_list: response.data});
      })
      .catch(function(err){
        console.log(err);
      })

    this.setState({
      search_term: '',
      results_showing: true
    })
  }

  plantList(){
    console.log(this.state.plant_list.length);
  if (this.state.plant_list.length === 0){
    return null;
  }
  return this.state.plant_list.map(function(currentPlant, i){
    console.log("inside map");
    return <Plant plant={currentPlant} key={i} modalShown={false}/>;
  })
  }

  componentDidMount(){
      //this._isMounted=true;
      axios.get('http://localhost:4000/plants/search/'+this.state.search_term)

        .then(response => {
          this.setState({plant_list: response.data});
        })
        .catch(function(err){
          console.log(err);
        })
    }

  // componentWillUnmount(){
  //      this._isMounted = false;
  // }

  // componentDidUpdate(prevProps, prevState) {
  //  if(JSON.stringify(prevState) !== JSON.stringify(this.state)) {
  //    axios.get('http://localhost:4000/plants/search/'+this.state.search_term)
  //      .then(response => {
  //        if(this._isMounted)
  //        {
  //        this.setState({plant_list: response.data});
  //        }
  //        })
  //      .catch(function(err){
  //          console.log(err);
  //      })
  //  }
  // }

  render(){
    return(
      <div>
      <h3>Search for plants</h3>

      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label>Plant Name:</label>
          <input  type="text"
                  className='form-control'
                  value={this.state.search_term}
                  onChange={this.onChangeSearchTerm}

                  />
        </div>

        <div className="form-group">
            <input type="submit" value="Search" className="btn btn-primary" />
        </div>

        <table className="table table-striped" style={{marginTop:20}}>
          <thead>
            <tr>
            <th>Plant Name</th>
            <th>Number of plants</th>
            <th>Date of planting</th>
            <th>Date of flowering</th>
            <th>Description</th>
            <th>Details</th>
            <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {this.plantList()}
          </tbody>
        </table>

      </form>
      </div>
    )
  }
}
