import e from "cors";
import { useEffect, useState } from "react";

const QuoteList = () => {
  const [data, setData] = useState([]);
  const [anime, setAnime] = useState("");
  const [character, setChar] = useState("");
  const [quote, setQuote] = useState("");
  const [submitted, setSubmit] = useState(false);
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/quotes")
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        setData(response);
      });
  }, [submitted]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setSubmit(false);

    const data = {
      anime: anime,
      character: character,
      quote: quote,
    };

    fetch("http://localhost:3001/quotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("data berhasil masuk");
        setSubmit(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Welcome to Quote App</h1>
      <hr />
      {data.map((item) => (
        <h1>{item.anime}</h1>
      ))}
      <form onSubmit={handleOnSubmit}>
        <label>Anime:</label>
        <input
          type="text"
          onChange={(e) => setAnime(e.target.value)}
          className="form-input"
        />
        <label>Karakter:</label>
        <input
          type="text"
          onChange={(e) => setChar(e.target.value)}
          className="form-input"
        />
        <label>Quote:</label>
        <input
          type="text"
          onChange={(e) => setQuote(e.target.value)}
          className="form-input"
        />
        <button type="submit">Add new Data</button>
      </form>
    </div>
  );
};

export default QuoteList;
