import React from 'react';
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <div className="feedbackFrom">
      <h2 className="feedbackFrom__title">{title}</h2>
      {children}
    </div>
  );
};

Section.protoTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
