// dapatkan semua data
// GET
const getData = async () => {
  try {
    const response = await fetch("http://localhost:3000/quotes");
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
};

// menyimpan data
// POST
const postData = async () => {
  const newData = {
    anime: "Dragon Ball Z",
    character: "Bulma Briefs",
    quote:
      "Yamcha, I was worried about you. For all I knew, you were dead in a ditch in a country you can’t pronounce. You’ll have to make this up to me. And you’re going to enjoy it.",
  };
  try {
    const response = await fetch("http://localhost:3000/quotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newData),
    });
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
};

// mengubah
// PUT
const putData = async () => {
  const updateData = {
    anime: "Log",
    character: "Henrietta",
    quote:
      "They want to believe that's true and when someone wants to believe something is true, they usually will.",
  };
  try {
    const response = await fetch("http://localhost:3000/quotes/4", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateData),
    });

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
};

// mengubah data / update data
// PATCH
const patchData = async () => {
  const updateData = {
    anime: "Attack on Titan",
  };
  try {
    const response = await fetch("http://localhost:3000/quotes/1", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateData),
    });

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
};

// menghapus data
// DELETE
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

deleteData();

// patchData();
// putData();

// postData();

// getData();
