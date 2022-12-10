import { useEffect, useState } from "react";

const QuoteFave = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/quotes?q=Attack")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  }, []);

  return (
    <div>
      <h1>Welcome to Quote App</h1>
      {data.map((item) => (
        <h3 key={item.id}>{item.anime}</h3>
      ))}
    </div>
  );
};

export default QuoteFave;
