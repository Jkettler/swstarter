import {BASE_URL} from '../constants';

const urlParser = url => {
  const slugs = url
    .split('/')
    .filter(slug => slug.length > 0)
    .slice(-2);
  return {category: slugs[0], id: slugs[1]};
};

const bulkUrlBuilder = urls => {
  const {category} = urlParser(urls[0]);
  console.log('url[0]', urls[0]);
  console.log('category: ', category);
  const retval = `${BASE_URL}${category}/?ids=${urls
    .map(url => url.id)
    .join(',')}`;
  console.log('retval: ', retval);
  return retval;
};

const searchUrlBuilder = (query, category) => {
  return `${BASE_URL}${category}/?search=${query}`;
};

module.exports = {urlParser, bulkUrlBuilder, searchUrlBuilder};
