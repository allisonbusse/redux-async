import React from 'react';
import PropTypes from 'prop-types';
import styles from './Character.css';

const Character = ({ image, name }) => {

  return (
    <li className={styles.Character}>
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
