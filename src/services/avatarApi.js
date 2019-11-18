export const getCharacters = () => {
  return fetch('https://last-airbender-api.herokuapp.com/api/v1/characters')
    .then(res => res.json())
    .then(characters => {
      return characters.map(character => ({
        id: character._id,
        image: character.photoUrl || 'https://i.pinimg.com/originals/ce/27/87/ce27870499a90e05363c91afe6b04aed.png',
        name: character.name
      }));
    });
};
