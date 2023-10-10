import React from "react";

function Sushi({ sushi: { name, img_url, price, id }, eatSushi, eaten }) {
  return (
    <div className="sushi">
      <div className="plate" onClick={(event) => eatSushi(event, price)}>
        {/* Tell me if this sushi has been eaten! */}
        {eaten.includes(id) ? null : (
          <img
            id={id}
            src={img_url}
            alt={name + " Sushi"}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
