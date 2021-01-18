window.addEventListener("message", (event) => {
  if (event.origin !== 'http://127.0.0.1:61674') {
    return
  }

  const data = JSON.parse(event.data)
  const { method, key, value } = data;

  if (method === 'put') {
    putData(key, value)
  } else if (method === 'get') {
    readData(key)
  } else if (method === 'delete') {
    removeData(key)
  }
});

const putData = (keyAdded, valueAdded) => {
  try {
    localStorage.setItem(keyAdded, valueAdded);
    console.log(
      `${keyAdded}:${valueAdded} were written into the domain.two local storage`
    );
  } catch (err) {
    console.log(`something went wrong, there is the following error: ${err}`);
  }
};

const readData = (keyReaded) => {
  const value = localStorage.getItem(keyReaded);

  if (value) {
    console.log(`${value} - is reseived from domain.two local storage`);
  } else {
    console.log("there is no such data in domain.two local storage");
  }
};

const removeData = (keyRemoved) => {
  const value = localStorage.getItem(keyRemoved);

  if (!value) {
    console.log(`There is no such data with the value "${value}"`);
  } else {

    try {
      localStorage.removeItem(keyRemoved);
      console.log(`value with the key '${keyRemoved}' was removed`);
    } catch (err) {
      console.log(`something went wrong, there is the following error: ${err}`);
    }
  }
};

