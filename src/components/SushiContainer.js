import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushis, eatSushi, eaten}) {
  return (
    <div className="belt">
      {sushis.map( sushi => <Sushi key={sushi.id} sushi={sushi} eatSushi={eatSushi} eaten={eaten}/>)}
      <MoreButton />
    </div>
  );
}

export default SushiContainer;
