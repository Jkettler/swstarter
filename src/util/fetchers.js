const asyncCall = url => {
  return new Promise(resolve => {
    fetch(url)
      .then(data => data.json())
      .then(jsonData => {
        resolve(jsonData);
      })
      .catch(error => console.log('Error!!!', error));
  });
};

const fetchOne = url => {
  return asyncCall(url);
};

async function fetchManyInstances(urls) {
  let promises = [];

  for (let url of urls) {
    promises.push(await asyncCall(url));
  }
  return promises;
}

module.exports = {
  fetchOne,
  fetchManyInstances,
};
