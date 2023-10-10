import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushis, eatSushi, eaten }) {

  const [startIndex, setStartIndex] = useState(0);

  // Function to update startIndex when "More Sushis" button is clicked
  const moreSushi = () => {
    // Update startIndex to display the next 4 sushis
    setStartIndex(startIndex + 4);
    if (startIndex + 4 > sushis.length) {
      setStartIndex(0);
    };
  };

  // Get the 4 sushis to display
  const displayedSushis = sushis.slice(startIndex, startIndex + 4);

  return (
    <div className="belt">
      {displayedSushis.map(sushi => <Sushi key={sushi.id} sushi={sushi} eatSushi={eatSushi} eaten={eaten} />)}
      <MoreButton moreSushi={moreSushi} />
    </div>
  );
}

export default SushiContainer;
