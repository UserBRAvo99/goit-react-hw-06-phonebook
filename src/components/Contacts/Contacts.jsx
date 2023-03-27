import React from 'react';

import style from './contacts.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilteredContacts } from 'redux/selectors';
import { removeContacts } from 'redux/contactsSlice';

function Contacts() {
  const dispatch = useDispatch();
  const UserContactsFilter = useSelector(selectContacts);

  return (
    <ul className={style.list}>
      {UserContactsFilter.map(({ name, phone, id }) => {
        return (
          <li key={id} className={style.item}>
            <span className={style.name}>{name}</span>
            <span className={style.number}>{phone}</span>
            <button
              className={style.btn}
              type="button"
              onClick={() => dispatch(removeContacts(id))}
              id={id}
            >
              X
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default Contacts;
