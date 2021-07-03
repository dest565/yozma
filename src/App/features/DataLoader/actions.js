import axios from 'axios';
import { ADD_ITEMS, SET_STATE } from '../../../Store/reducers/Listreducer';
import { dataUrl } from '../../../Constants/UrlsConstants';

export const loadData = () => dispatch =>
  Promise.resolve()
    .then(() => dispatch({type: SET_STATE, isListReady: false}))
    .then(() => axios.get(dataUrl))
    .then(({data}) => dispatch({type: ADD_ITEMS, payload: data}))
    .finally(() => dispatch({type: SET_STATE, isListReady: true}));
