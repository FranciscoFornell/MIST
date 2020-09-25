import PropTypes from 'prop-types';
import React from 'react';

/**
 * Simple Ink Web Player Button
 * @component
 * @example
 * return (
 *   <InkButton
 *     label="This is a button"
 *     onClick={() => alert('You pressed the button!')}
 *   />
 * );
 */

const InkButton = ({ label, onClick }) => {
  const clickHandler = onClick;
  return <button onClick={clickHandler}>{label}</button>;
};

InkButton.propTypes = {
  /**
   * The label of the button
   */
  label: PropTypes.string,
  /**
   * The function to be called when the button is clicked
   */
  onClick: PropTypes.func,
};

export default InkButton;
