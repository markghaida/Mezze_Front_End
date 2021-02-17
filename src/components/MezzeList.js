import React from "react";
import MezzeCard from "./MezzeCard";


function MezzeList({ mezzes, handleOrder }) {
  // map function
  const mezzeList = mezzes.map((mezze) => {
    return <MezzeCard key={mezze.id} mezze={mezze} handleOrder={handleOrder}/>
  })

  return (
    <ul className="cards">
      {mezzeList}
    </ul>
  );
}


export default MezzeList;