import React, { useEffect } from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import shortid from 'shortid';

import Filter from 'components/Filter';
import FormPhonebook from 'components/FormPhonebook';
import Contacts from 'components/Contacts';

import style from './phonebook.module.scss';
import { selectContacts } from 'redux/selectors';
import { addContacts } from 'redux/contactsSlice';
import { fetchContacts } from 'redux/operations';

function Phonebook() {
  const UserContacts = useSelector(selectContacts);

  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleInputChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const formOnSubmitBtn = event => {
    event.preventDefault();

    if (UserContacts.find(elem => elem.userName === name)) {
      alert(`${name} is already in contacts`);
      resetFormInput();
      return;
    }

    dispatch(
      addContacts({
        userName: name.trim(),
        userNumber: number.trim(),
        id: shortid(),
      })
    );
    resetFormInput();
  };

  const resetFormInput = () => {
    setName('');
    setNumber('');
  };
  return (
    <div className={style.wrapper}>
      <h2 className={style.title}>Phonebook</h2>
      <FormPhonebook
        submit={formOnSubmitBtn}
        name={name}
        number={number}
        change={handleInputChange}
      />
      <div>
        <h2 className={style.title}>Contacts</h2>
        <Filter />
        <Contacts />
      </div>
    </div>
  );
}

export default Phonebook;
