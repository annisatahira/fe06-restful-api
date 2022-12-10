import { useEffect, useState } from "react";

const QuoteFave = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/quotes?q=Attack")
      .then((response) => response.json())
      .then((response) => {
        setData(response);
      });
  }, []);

  console.log(data);

  return (
    <div>
      <h1>Welcome to Quote App</h1>
      {data.map((item) => (
        <h1>{item.character}</h1>
      ))}
    </div>
  );
};

export default QuoteFave;
