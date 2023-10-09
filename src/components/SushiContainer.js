import React, { useEffect } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({api}) {
  return (
    <div className="belt">
      {/* Render Sushi components here! */}
      {useEffect(()=>{
        fetch(api)
        .then(res => res.json())
        .then(sushiList => {
          sushiList.forEach(sushi => {
            <Sushi />
          });
        })
      })}
      <MoreButton />
    </div>
  );
}

export default SushiContainer;
