import React from "react";
import MoreButton from "./MoreButton"
import Sushi from './Sushi'

function SushiContainer({sushis, moreSushi, handleEatingSushi}) {

  // maps over each sushi and returns a individual sushi
  const displaySushi = sushis.map(sushi => {
    return <Sushi 
              key={sushi.id}
              sushi={sushi}
              handleEatingSushi={handleEatingSushi}
          />
  })
    
  

  return (
    <div className="belt">
      {displaySushi}
      <MoreButton moreSushi={moreSushi}/>
    </div>
  );
}

export default SushiContainer;
