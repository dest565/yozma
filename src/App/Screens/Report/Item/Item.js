import React from 'react';

import './styles.css';

const Item = ({item, onItemClick}) => {

  const onClick = () => onItemClick(item.id);

  return <div className={'reportItemContainer'} onClick={onClick}>
    <div className={'reportItemPart'}>
      <div className={'reportItemPartHeader'} >Name/Company</div>
      <div>{item.name}</div>
      <div>{item.company.name}</div>
    </div>

    <div className={'reportItemPart'}>
      <div className={'reportItemPartHeader'} >Phone/Email</div>
      <div>{item.phone}</div>
      <div>{item.email}</div>
    </div>

    <div className={'reportItemPart'}>
      <div className={'reportItemPartHeader'} >City/Address</div>
      <div>{item.address.city}</div>
      <div>{item.address.street}</div>
    </div>

    <div className={'reportItemPart'}>
      <div className={'reportItemPartHeader'} >Note/Time</div>
      <div>{item.note}</div>
      <div>{item.time}</div>
    </div>
  </div>
};

export default Item
