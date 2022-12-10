const getData = async () => {
  try {
    const response = await fetch("http://localhost:3000/quotes");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const postData = async () => {
  const data = {
    anime: "New Anime 2",
    character: "New Char 2",
    quote: "New Quote 2",
  };
  try {
    const response = await fetch("http://localhost:3000/quotes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const res = await response.json();
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

const putData = async () => {
  const dataPut = {
    anime: "Soul Kid",
    character: "Kid",
    quote: "Helo",
  };
  try {
    const response = await fetch("http://localhost:3000/quotes/1", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataPut),
    });

    const res = await response.json();
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

const patchData = async () => {
  const dataPatch = {
    anime: "Soul Kid Hello",
  };
  try {
    const response = await fetch("http://localhost:3000/quotes/1", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataPatch),
    });

    const res = await response.json();
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

const deleteData = async () => {
  try {
    const response = await fetch("http://localhost:3000/quotes/1", {
      method: "DELETE",
    });

    const res = await response.json();
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

// getData();
// postData();
// putData();
// patchData();
deleteData();
