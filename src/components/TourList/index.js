import React, { Component } from 'react';
import './TourList.css';

import Tour from '../Tour/Tour';
import {tourData} from '../tourData';

export default class Tourlist extends Component {
    state = {
        tours: tourData
    };
    removeTour = id=> {
        const {tours} = this.state;
        const sortedTours = tours.filter(tour => {
            return id !== tour.id
        });
        this.setState({
            tours: sortedTours
        });
    }
  render() {
      const {tours} = this.state;
    return (
      <section className="tourlist">
        {tours.map(tour => {
            return(
                <Tour key = {tour.id} tour={tour} removeTour={this.removeTour}/>
            )
        })}
      </section>
    )
  }
}
