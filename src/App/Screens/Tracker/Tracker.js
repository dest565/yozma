import React, { useState } from 'react';
import { connect } from 'react-redux'
import Select from 'react-select';

import { setDataToLocalStorage, getNoteFromLocalStorage } from '../../core/localStorageHandler'

import './styles.css'

const Tracker = ({list}) => {
  const [id, setId] = useState('');
  const [user, setUser] = useState('');
  const [note, setNote] = useState('');
  const [time, setTime] = useState('');

  const prepareList = () => list.map( i => ({
    value: i.id,
    label: i.name,
    note: i.note || '',
    time: i.time || ''
  }));

  const selectUser = e => {
    setUser(e);
    setId(e.value);
    const additionalData = getNoteFromLocalStorage(e.value);
    if (additionalData) {
      setNote(additionalData.note);
      setTime(additionalData.time);
    }
  };

  const submitData = () => {
    setDataToLocalStorage({
      id,
      note,
      time
    });
    setId('');
    setNote('');
    setUser('');
    setTime('');
  };

  return <div className={'trackerContainer'} >
    <span className={'userSpan'} >Chose user</span>
    <div className={'trackerDropDown'} >
      <Select options = {prepareList()} onChange={selectUser} value={user}/>
    </div>
    <span>Add Info</span>
    <input placeholder={'Write note here'} onChange={e=> setNote(e.target.value)} value={note} disabled={!id}/>
    <span>Add time </span>
    <input type="time" placeholder={'Example 07:47 '} onChange={e=> setTime(e.target.value)} value={time} disabled={!id}/>
    <button onClick={submitData} disabled={!id || !time || ! note}>Submit</button>
  </div>
};

const mapStateToProps = (state) => ({
  list : state.List.list
});

export default connect(mapStateToProps)(Tracker);
