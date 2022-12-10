import "./App.css";
import QuoteFave from "./components/QuoteFav";
import QuoteList from "./components/QuoteList";
import { Link, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">List Quotes</Link>
        </li>
        <li>
          <Link to="/favorite">Favorite Quotes</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<QuoteList />} />
        <Route path="/favorite" element={<QuoteFave />} />
      </Routes>
    </div>
  );
}

export default App;
