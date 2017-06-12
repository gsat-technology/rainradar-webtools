import React, { Component } from 'react';
import config from 'react-global-configuration';
import axios from 'axios';
import moment from 'moment';

class RadarImage extends Component {


  constructor(props) {
    super(props);

    this.state = {
      src_url: null,
      status: ''
    }

    const url = `${config.get('rain_data_api')}/radarinfo/${this.props.radar_id}?type=${this.props.type}&length=${this.props.length}&create=true`;
    axios.get(url).then(response => {
        console.log(response);
        if(response.status == 200) {
          this.setState({status: 'downloading'})
          this.waitRadarImageToCreate(response.data.location)
        }
      }
    );
  }

  waitRadarImageToCreate(url) {

    const t = setInterval(function() {

      var self = this;

      axios.head(url).then(response => {
        if(response.status == 200) {

          clearInterval(t);

          this.setState({
            src_url: url,
            status: 'loaded'
          });
        }
      });
    }.bind(this),2000)

  }

  render() {

    if (!this.state.src_url) {
      return (
        <div className="image-no-image">
          <span className="radar-image-status">{this.state.status}</span>
        </div>
      )
    }

    return (
      <div className="radar-animation">
        <img className="radar-image" src={this.state.src_url} />
        <div className="radar-timestamp">{this.state.src_url.split('/')[5]}</div>
      </div>
    );
  }
}

export default RadarImage;
