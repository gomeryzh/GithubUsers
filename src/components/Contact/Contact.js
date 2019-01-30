import React from 'react';
import { SortableElement } from 'react-sortable-hoc';
import * as s from './Contact.module.css';

const Contact = SortableElement(
  ({ login, avatar_url, html_url, onEdit, onDelete }) => (
    <div className={s.container}>
      <h4>{login}</h4>
      <img width="100" heigth="100" src={avatar_url} alt={login} />
      <a href={html_url} className={s.text} target="blank">
        {html_url}
      </a>

      <hr />
      <footer className={s.footer}>
        <button className={s.button} onClick={onEdit}>
          Edit
        </button>
        <button className={s.button} onClick={onDelete}>
          Delete
        </button>
      </footer>
    </div>
  ),
);

export default Contact;
