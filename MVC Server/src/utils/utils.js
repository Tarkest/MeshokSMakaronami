const transformToJSONArray = (data) => data.map((model) => model.toJSON());

const getShopsFromProducts = (data) => {
  let buffer = [];
  for (let i = 0; i < data.length; i++) {
    buffer = [...buffer, ...data[i].Shops]
  }
  let unique = {};
  buffer.forEach((element) => {
    if(!unique[element.id]) {
      unique[element.id] = element;
    }
  });
  return Object.keys(unique).map((key) => unique[key]);
}

module.exports = { transformToJSONArray, getShopsFromProducts };
