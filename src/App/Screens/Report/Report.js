import React from 'react';
import { connect } from 'react-redux'

import { history } from '../../../index'
import Item from './Item/Item'
import { addAdditionalData } from './actions';
import NAV_CONSTANTS from '../../../Constants/NavigationConstants'
import './styles.css';

const Report = ({ list }) => {
  const onItemClick = id => history.push(`${NAV_CONSTANTS.USER}/${id}`);

  return <div className={'reportContainer'}>
      {list.map(i => <Item item={i} key={i.id} onItemClick={onItemClick} />)}
    </div>
};

const mapStateToProps = (state) => ({
  list : addAdditionalData(state.List.list)
});

export default connect(mapStateToProps)(Report);
