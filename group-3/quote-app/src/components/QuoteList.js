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
      .then((json) => {
        setData(json);
      });
  }, [submitted]);

  const handleSubmit = (e) => {
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
      .then((json) => {
        alert("Data berhasil disimpan");
        console.log(json);
        setSubmit(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h1>Welcome to Quote App</h1>
      {data.map((item) => (
        <h3 key={item.id}>{item.anime}</h3>
      ))}
      <hr />
      <form onSubmit={handleSubmit}>
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
