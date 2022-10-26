import React from 'react';
import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
  <div className="notification">{message}</div>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
