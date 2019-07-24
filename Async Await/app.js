const getTodos = async resource => {
  const response = await fetch(resource);
  if (response.status !== 200) {
    throw new Error('Could not fetch data');
  }
  const data = response.json();
  return data;
};

getTodos('../todos/lukas.json')
  .then(data => console.log(data))
  .catch(err => console.log(err.message));
