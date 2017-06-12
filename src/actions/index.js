
import axios from 'axios';

import {FETCH_RADAR_LIST } from './action_types';
import { RAIN_DATA_SITE } from '../secrets';

export function fetchRadarList() {

  console.log('fetchRadarList()');

  return {
    type: 'FETCH_RADAR_LIST',
    payload: axios.get('global_config.json')
  }
}
