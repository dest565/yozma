import React from 'react';
import './styles.css'

const Header = ({children}) => {
  return <div className={'headerContainer'}>
    <div className={'header'} >YozmaTech Tracker Soft</div>
    <div >{children}</div>
  </div>
};

export default Header;
