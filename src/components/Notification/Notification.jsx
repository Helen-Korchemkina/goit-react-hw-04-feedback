import React from 'react';
import PropTypes from 'prop-types';
import s from './Notification.module.css';

const Notification = ({ message }) => (
  <div>
    <h2 className={s.massage}>{message}</h2>
  </div>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
