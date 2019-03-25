import React, {Component} from 'react';
import '../App.css';


export default class Garden extends Component{

  getGrid(){
            return (
              <div className="grid-container">
                {Array.from({length: 16}, (v, k) => {
                  return <div className="grid-item" key={k+1}>
                    <a href={"/square/"+(k+1).toString()}>{(k+1)}</a>
                  </div>
                })}
              </div>
            );
          }



  render(){
    return(
      <div>

        <h2>Welcome to Jessie's Garden</h2>
        <h4>This is a grid of the garden. Click a square to see plant in that square</h4>

        <div>
          {this.getGrid(16)}
        </div>
      </div>
    )
  }
}
