import React from 'react';
import PropTypes from 'prop-types';

/**
 * Simple Ink Web Player lines component
 * @component
 * @example
 * const lines = [
 *   'Line 1',
 *   'Line 2',
 *   'Line 3',
 *   'Line 4',
 *   'Line 5',
 *   'Line 6',
 *   'Line 7',
 *   'Line 8',
 * ];
 * return (<InkLines lines={lines} />);
 */
const InkLines = ({ lines }) => {
  let counter = 0;
  return (
    <React.Fragment>
      {lines.map((line) => (
        <p key={counter++}>{line}</p>
      ))}
    </React.Fragment>
  );
};

InkLines.propTypes = {
  /**
   * Array of lines
   */
  lines: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default InkLines;
