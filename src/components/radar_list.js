import moment from 'moment';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRadarList } from '../actions';
import axios from 'axios';

import RadarImage from './radar_image.js'

class RadarList extends Component {

  constructor(props) {
    super(props);


    this.state = {
      timestamp: '',
      length: 2
    }
  }

  componentDidMount() {
    this.props.fetchRadarList();
  }


  createRadarRow(radar) {
    
    return (
      <tr key={radar.id}>
        <td className="col-md-5">
          <div>{radar.name}</div>
          <div className="radar-details">
            <p className="radar-detail">
              <span className="radar-detail-spacer">{radar.id}</span>
              <span className="radar-detail-spacer">{radar.resolution_mins}min resolution</span>
              <span className="radar-detail-spacer">{radar.add_offset_mins}min offset</span>
              <span className="radar-detail-spacer">{radar.state}</span>
            </p>
          </div>
        </td>
        <td className="col-md-5">
          <RadarImage radar_id={radar.id} type="latestAnimationLocation" length={this.state.length} />
        </td>
      </tr>
    );
  }

  render() {

    if (Object.keys(this.props.radars).length === 0) {
      return (
        <div>no radars</div>
      );
    }

    return (
      <div>
        <table className="table table-hover">
        <thead>
          <tr>
            <th className="col-md-5">Name</th>
            <th className="col-md-5">Latest</th>
          </tr>
        </thead>
        <tbody>
            { _.values(this.props.radars).map(radar => this.createRadarRow(radar)) }
        </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    radars: state.radars
  };
}

export default connect(mapStateToProps, { fetchRadarList })(RadarList);
