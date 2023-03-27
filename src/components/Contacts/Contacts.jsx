import React from 'react';
import PropTypes from 'prop-types';

import shortid from 'shortid';

import style from './contacts.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';
import { removeContacts } from 'redux/actions';

function Contacts() {
  const dispatch = useDispatch();
  const UserContactsFilter = useSelector(selectFilteredContacts);

  return (
    <ul className={style.list}>
      {UserContactsFilter.map(({ userName, userNumber, id }) => {
        return (
          <li key={shortid()} id={id} className={style.item}>
            <span className={style.name}>{userName}</span>
            <span className={style.number}>{userNumber}</span>
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
