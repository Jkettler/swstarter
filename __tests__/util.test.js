import {BASE_URL} from '../src/constants';

const helpers = require('../src/util/helpers');
const {urlParser, orderedObjectList, searchUrlBuilder} = helpers;

test('parses category and id from url', () => {
  const filmInstance = `${BASE_URL}films/5/`;
  const peopleInstance = `${BASE_URL}people/1/`;

  expect(urlParser(filmInstance)).toEqual({category: 'films', id: '5'});
  expect(urlParser(peopleInstance)).toEqual({category: 'people', id: '1'});
});

test('builds search url for api', () => {
  expect(searchUrlBuilder('r2', 'people')).toBe(`${BASE_URL}people/?search=r2`);
});

test('copies unordered nested objects into ordered/filtered array', () => {
  const obj = {cat: 'mew', dog: 'woof', fox: '???', sleepy_human: 'zzZzz'};
  const scheme = ['sleepy_human', 'dog', 'fox'];
  const expected = [{'Sleepy Human': 'zzZzz'}, {Dog: 'woof'}, {Fox: '???'}];

  expect(orderedObjectList(obj, scheme)).toEqual(expected);
});
