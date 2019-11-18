import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';
import styles from './Characters.css';

const Characters = ({ characters }) => {

  const mappedCharacters = characters.map(character => {
    return <Character
      key={character.name}
      {...character} />;
  });

  return (
    <ul className={styles.Characters}>
      {mappedCharacters}
    </ul>
  );
};

Characters.propTypes = {
  characters: PropTypes.array.isRequired
};

export default Characters;
