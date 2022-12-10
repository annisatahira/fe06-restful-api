import { useEffect, useState } from "react";

const QuoteFave = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/quotes?q=Attack")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Welcome to Quote App</h1>
      {data.map((item) => (
        <h2 key={item.id}>{item.anime}</h2>
      ))}
    </div>
  );
};

export default QuoteFave;
