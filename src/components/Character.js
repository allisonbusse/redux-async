import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ image, name }) => {

  return (
    <li>
      <img src={image} alt={name} />
      <h2>{name}</h2>
    </li>
  );

};

Character.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Character;
