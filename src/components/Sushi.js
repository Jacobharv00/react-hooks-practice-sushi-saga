import React from "react";

function Sushi({sushi, handleEatingSushi}) {
  const {img_url, name, eaten, price} = sushi // pulls certain keys out to reference down below

  // eaten is set to false so if not eaten change boolean
  function eat() {
    if (!eaten) {
      handleEatingSushi(sushi)
    }
  }


  return (
    <div className="sushi">
      <div className="plate" onClick={eat}>
        {/* Tell me if this sushi has been eaten! */}
        {eaten ? null : (
          <img
            src={img_url}
            alt={name}
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
