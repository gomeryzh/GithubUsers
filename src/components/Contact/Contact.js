import React from 'react';
import * as s from './Contact.module.css';

const Contact = ({ login, avatar_url, html_url, onDelete }) => (
  <div className={s.container}>
    <h4>{login}</h4>

    <a href={html_url} className={s.text} target="blank">
      <img src={avatar_url} alt={login} className={s.img} />
    </a>

    <hr />
    <footer className={s.footer}>
      <button className={s.button} onClick={onDelete}>
        Delete
      </button>
    </footer>
  </div>
);

export default Contact;
