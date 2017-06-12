import { combineReducers } from 'redux';
import reducerFetchRadarList from './reducer_radar_list';

const rootReducer = combineReducers({
  radars: reducerFetchRadarList
});

export default rootReducer;
