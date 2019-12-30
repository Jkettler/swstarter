import {BASE_URL} from '../constants';

const urlParser = url => {
  const slugs = url
    .split('/')
    .filter(slug => slug.length > 0)
    .slice(-2);
  return {category: slugs[0], id: slugs[1]};
};

const searchUrlBuilder = (query, category) => {
  return `${BASE_URL}${category}/?search=${query}`;
};

const formatKeyDisplay = key => {
  return key
    .split('_')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ');
};

// This is my "dynamic" solution to getting the people attributes to render in the arbitrary order from the mocks
// This second param acts as both a filter and a sorting scheme
// Given an object of nested objects (first arg) and filter/mask that looks like [key1, key3, key6] (second arg),
// return an array of k/v pairs filtered and ordered to match the second arg.
// It limits reusability, but I'm also formatting the keys at the same time

const orderedObjectList = (obj, orderedFilter) => {
  let result = [];
  for (let [k, v] of Object.entries(obj)) {
    const pos = orderedFilter.indexOf(k);
    if (pos >= 0) {
      const lhs = formatKeyDisplay(k);
      result[pos] = {[lhs]: v};
    }
  }
  return result;
};

module.exports = {
  urlParser,
  searchUrlBuilder,
  orderedObjectList,
};
