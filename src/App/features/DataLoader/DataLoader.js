import { useEffect } from 'react';
import { connect } from 'react-redux';

import { loadData } from './actions'

const DataLoader = ({loadData}) => {
  useEffect(() => {
    loadData();
  });
  return null
};

const mapDispatchToprops = (dispatch) => ({
  loadData: () => dispatch(loadData())
});

export default connect(null, mapDispatchToprops)(DataLoader)
