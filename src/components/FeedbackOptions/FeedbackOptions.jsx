import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ul className={s.buttons}>
    {options.map(option => {
      return (
        <li key={option}>
          <button
            type="button"
            onClick={onLeaveFeedback}
            name={option}
            className={ucFirst(option)}
          >
            {ucFirst(option)}
          </button>
        </li>
      );
    })}
  </ul>
);

function ucFirst(str) {
  return str[0].toUpperCase() + str.slice(1);
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
