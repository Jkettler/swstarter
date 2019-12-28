import {BASE_URL} from '../src/constants';

const helpers = require('../src/util/helpers');
const {urlParser, urlBuilder} = helpers;

const filmInstance = `${BASE_URL}films/5/`;
const filmInstanceTwo = `${BASE_URL}films/2/`;
const peopleInstance = `${BASE_URL}people/1/`;

test('parses category and id from url', () => {
  expect(urlParser(filmInstance)).toEqual({category: 'films', id: '5'});
  expect(urlParser(peopleInstance)).toEqual({category: 'people', id: '1'});
});

test('builds bulk url from Array of parsed vals', () => {
  const urls = [urlParser(filmInstance), urlParser(filmInstanceTwo)];

  expect(urlBuilder(urls)).toBe(`${BASE_URL}films/?ids=5,2`);
});
