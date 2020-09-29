import React from 'react';
import PropTypes from 'prop-types';

/**
 * Simple Ink Web Player Header
 * @component
 * @example
 * return (
 *   <InkHeader
 *     title="Ink Title"
 *     author="Ink Author Name"
 *   />
 * );
 */

const InkHeader = ({ title, author }) => (
  <React.Fragment>
    {title && <h2>{title}</h2>}
    {author && <h4>{author}</h4>}
  </React.Fragment>
);

InkHeader.propTypes = {
  /**
   * The title of the Ink
   */
  title: PropTypes.string,
  /**
   * The author of the ink
   */
  author: PropTypes.string,
};

export default InkHeader;
