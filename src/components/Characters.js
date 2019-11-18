import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';

const Characters = ({ characters }) => {

  const mappedCharacters = characters.map(character => {
    return <Character
      key={character.name}
      {...character} />;
  });

  return (
    <ul>
      {mappedCharacters}
    </ul>
  );
};

Characters.propTypes = {
  characters: PropTypes.array.isRequired
};

export default Characters;
