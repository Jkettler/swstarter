import {BASE_URL} from '../constants';

const urlParser = url => {
  const slugs = url
    .split('/')
    .filter(slug => slug.length > 0)
    .slice(-2);
  return {category: slugs[0], id: slugs[1]};
};

const urlBuilder = urls => {
  return `${BASE_URL}${urls[0].category}/?ids=${urls
    .map(url => url.id)
    .join(',')}`;
};

const searchUrlBuilder = query => {

};

module.exports = {urlParser, urlBuilder};
