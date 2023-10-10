import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [budget, setBudget] = useState(100);
  const [sushis, setSushis] = useState([]);
  const [eaten, setEaten] = useState([]);

  function eatSushi(event, price) {
    const sushiId = parseInt(event.target.id);
    if (!eaten.includes(sushiId) && event.target.id && budget >= price) {
      setEaten([...eaten, sushiId]);
      setBudget(budget - price);
    }
  };
  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(sushiList => {
        setSushis(sushiList);
      });
  }, []);
  return (
    <div className="app">
      <SushiContainer
        sushis={sushis}
        eatSushi={eatSushi}
        eaten={eaten} />
      <Table
        budget={budget}
        eaten={eaten} />
    </div>
  );
}

export default App;
