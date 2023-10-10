import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushis, eatSushi, eaten }) {

  const [startIndex, setStartIndex] = useState(0);

  const moreSushi = () => {
    let newStartIndex = startIndex + 4;
    if (newStartIndex >= sushis.length) {
      newStartIndex = 0;
    };
    setStartIndex(newStartIndex);
  };
  const displayedSushis = sushis.slice(startIndex, startIndex + 4);

  return (
    <div className="belt">
      {displayedSushis.map(sushi => <Sushi key={sushi.id} sushi={sushi} eatSushi={eatSushi} eaten={eaten} />)}
      <MoreButton moreSushi={moreSushi} />
    </div>
  );
}

export default SushiContainer;
