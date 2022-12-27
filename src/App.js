
import './App.css';
import React, { useState } from 'react';
import { Routes,Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ContactList from './components/Contacts/ContactList/ContactList';
import ViewContact from './components/Contacts/ViewContact/ViewContact';
import EditContact from './components/Contacts/EditContact/EditContact';
import Addcontact from './components/Contacts/Addcontact/Addcontact';
import ContactProvider from './context/ContactContext';

let App=()=> {
  return (
    <React.Fragment>
      <ContactProvider>

      <NavBar/>
      <Routes>
        <Route path={'/'} element={<Navigate to={'/contacts/list'}/>}/>
        <Route path={'/contacts/list'} element={<ContactList/>}/>
        <Route path={'/contacts/add'} element={<Addcontact/>}/>
        <Route path={'/contacts/view/:contactId'} element={<ViewContact/>}/>
        <Route path={'/contacts/edit/:contactId'} element={<EditContact/>}/>
      </Routes>
      </ContactProvider>

    </React.Fragment>
  );
}

export default App;
