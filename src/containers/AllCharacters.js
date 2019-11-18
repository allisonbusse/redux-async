import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCharacters, getCharactersLoading } from '../selectors/charactersSelectors';
import { fetchCharacters } from '../actions/characterActions';
import Characters from '../components/Characters';

const AllCharacters = () => {
  const list = useSelector(state => getCharacters(state));
  const loading = useSelector(state => getCharactersLoading(state));
  const dispatch = useDispatch();
  const loadCharacters = () => dispatch(fetchCharacters());

  useEffect(() => {
    loadCharacters();
  }, []);

  if(loading) return <h1>Loading Characters...</h1>;


  return (
    <Characters characters={list} />
  );
};

export default AllCharacters;
