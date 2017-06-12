import _ from 'lodash';
import { FETCH_RADAR_LIST } from '../actions/action_types';

export default function(state = {}, action) {
  console.log('action caught: ', action.type);

  switch (action.type) {
    case FETCH_RADAR_LIST:
      console.log('caught: ', FETCH_RADAR_LIST);

      const radars = _.mapKeys(action.payload.data.radars, 'id');
      return radars;
  }

  return state;
}
