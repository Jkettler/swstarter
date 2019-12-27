import React from 'react';
import {Button} from 'react-native';

export class SearchScreen extends React.Component {
  static navigationOptions = {
    title: 'Search',
  };

  onResultPress = details => {
    const {navigate} = this.props.navigation;
    console.log('onResultPress details: ', details);
    navigate('Details', {details: details});
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <Button
        title="Do a searchin"
        onPress={() =>
          navigate('Results', {
            onResultPress: this.onResultPress,
            results: RESULTS,
          })
        }
      />
    );
  }
}

const RESULTS = {
  count: 1,
  next: null,
  previous: null,
  results: [
    {
      name: 'R2-D2',
      height: '96',
      mass: '32',
      hair_color: 'n/a',
      skin_color: 'white, blue',
      eye_color: 'red',
      birth_year: '33BBY',
      gender: 'n/a',
      homeworld: 'https://swapi.co/api/planets/8/',
      films: [
        'https://swapi.co/api/films/2/',
        'https://swapi.co/api/films/5/',
        'https://swapi.co/api/films/4/',
        'https://swapi.co/api/films/6/',
        'https://swapi.co/api/films/3/',
        'https://swapi.co/api/films/1/',
        'https://swapi.co/api/films/7/',
      ],
      species: ['https://swapi.co/api/species/2/'],
      vehicles: [],
      starships: [],
      created: '2014-12-10T15:11:50.376000Z',
      edited: '2014-12-20T21:17:50.311000Z',
      url: 'https://swapi.co/api/people/3/',
    },
    {
      name: 'C-3PO',
      height: '167',
      mass: '75',
      hair_color: 'n/a',
      skin_color: 'gold',
      eye_color: 'yellow',
      birth_year: '112BBY',
      gender: 'n/a',
      homeworld: 'https://swapi.co/api/planets/1/',
      films: [
        'https://swapi.co/api/films/2/',
        'https://swapi.co/api/films/5/',
        'https://swapi.co/api/films/4/',
        'https://swapi.co/api/films/6/',
        'https://swapi.co/api/films/3/',
        'https://swapi.co/api/films/1/',
      ],
      species: ['https://swapi.co/api/species/2/'],
      vehicles: [],
      starships: [],
      created: '2014-12-10T15:10:51.357000Z',
      edited: '2014-12-20T21:17:50.309000Z',
      url: 'https://swapi.co/api/people/2/',
    },
  ],
};
