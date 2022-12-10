// GET
const getAllData = async () => {
  try {
    const response = await fetch("http://localhost:3000/quotes");
    const json = await response.json();

    console.log(json);
  } catch (error) {
    console.log(error);
  }
};

// POST DATA
const postData = async () => {
  const dataBaru = {
    anime: "Fate/zero",
    character: "Gilgamesh",
    quote:
      "Mongrels though they may be, they're still figures of some slight renown",
  };
  try {
    const response = await fetch("http://localhost:3000/quotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataBaru),
    });
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
};

// UPDATE /PUT
const putData = async () => {
  const dataUpdate = {
    anime: "Fullmetal",
    character: "Alphonse Elric",
    quote:
      "On the day we left, we burned down the family home and all the familiar things inside. Because some memories aren't meant to leave traces.",
  };

  try {
    const response = await fetch("http://localhost:3000/quotes/1", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataUpdate),
    });
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
};

// PATCH
const patchData = async () => {
  const dataUpdate = {
    anime: "Natsume",
  };
  try {
    const response = await fetch("http://localhost:3000/quotes/3", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataUpdate),
    });
    const json = await response.json();

    console.log(json);
  } catch (error) {
    console.log(error);
  }
};

const deleteData = async () => {
  try {
    const response = await fetch("http://localhost:3000/quotes/5", {
      method: "DELETE",
    });
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
};

// getAllData();
// postData();
// putData();
// patchData();
deleteData();
