import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux'
import {
  useParams
} from "react-router-dom";

import { getNoteFromLocalStorage } from '../../core/localStorageHandler'


import './styles.css'

const Info = ({list}) => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [additionalNotes, setAdditionalNotes] = useState(null);

  useEffect(() => {
    list && setUser(list.find(i => i.id.toString() === id))
  },[list, id]);

  useEffect(() => {
    const additionalData = getNoteFromLocalStorage(id);
    if (additionalData) {
      setAdditionalNotes({
        note : additionalData.note,time:
        additionalData.time});
    }
  }, [user, id]);

  if (!user) return <div className={'infoContainer'} ><span>`User with id: ${id} not found =(`</span></div>;

  return <div className={'infoContainer'} >
    <div className={'infoPart'}>
      <span>User: {user.name}</span>
    </div>
    <div className={'infoPart'}>
      <div className={'subHeader'}>Contacts</div>
      <div>Username: {user.username}</div>
      <div>Email: {user.email}</div>
      <div>Phone: {user.phone}</div>
      <div>Website: {user.website}</div>
    </div>
    <div className={'infoPart'}>
      <div className={'subHeader'}>Address</div>
      <div>City: {user.address.city}</div>
      <div>Street: {user.address.street}</div>
      <div>Suite: {user.address.suite}</div>
      <div>Zipcode: {user.address.zipcode}</div>
    </div>
    <div className={'infoPart'}>
      <div className={'subHeader'}>Company Info</div>
      <div>Company Name: {user.company.name}</div>
      <div>Company catch phrase: {user.company.catchPhrase}</div>
      <div>BS: {user.company.bs}</div>
    </div>
    {
      additionalNotes ? (
        <div className={'infoPart'}>
          <div className={'subHeader'}>Notes</div>
          <div>Note: {additionalNotes.note}</div>
          <div>Time: {additionalNotes.time}</div>
        </div>
      ) : null
    }
  </div>
};

const mapStateToProps = (state) => ({
  list : state.List.list
});

export default connect(mapStateToProps)(Info)
