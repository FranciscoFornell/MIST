import React from 'react';
import PropTypes from 'prop-types';
import InkButton from '../InkButton';

/**
 * Simple Ink Web Player Choices
 * @component
 * @example
 * const choices = [
 *   { text: 'Choice 1', index: 1 },
 *   { text: 'Choice 2', index: 2 },
 * ];
 * return (
 *   <InkChoices
 *     choices={choices}
 *     clickHandler={(index) => alert(`Choice ${index} selected!`)}
 *   />
 * );
 */

const InkChoices = ({ choices, clickHandler }) => (
  <React.Fragment>
    {choices.map(({ text, index }) => (
      <InkButton key={index} onClick={() => clickHandler(index)} label={text} />
    ))}
  </React.Fragment>
);

InkChoices.propTypes = {
  /**
   * An array of ink choices
   */
  choices: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      index: PropTypes.number.isRequired,
    })
  ).isRequired,
  /**
   * The function to be called with the choice index as param when the choice button is clicked
   */
  clickHandler: PropTypes.func,
};

export default InkChoices;
