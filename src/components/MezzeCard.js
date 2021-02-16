import React, { useState } from "react";

function MezzeCard({ mezze, handleOrder }) {
  const [inCart, setInCart] = useState(false);
//   console.log(mezze)

  function handleToggleCart() {
    setInCart(!inCart);
    if(inCart === false) {
      fetch(`http://localhost:3000/orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id: 1,
          mezze_id: mezze.id, 
          calories: mezze.calories
        }),
      })
      .then(res => res.json())
      .then((newOrder) => {
        // handleOrder(newOrder)
        handleOrder(newOrder)
        handleOrderList(newOrder)
      })
    }
  }

  // persist toggle to db 
  // create or make a post request to db --> localhost3000/orders
  // will create singular order and add to orderDetails state variable 
  // 
  
 return (
  <div>
    {mezze.name}
    {mezze.calories}
    {inCart ? (
      <button className="primary" onClick={handleToggleCart}>In Cart</button>
    ) : (
      <button onClick={handleToggleCart}>Add To Cart</button>
    )}
  </div>
 ) 
}




export default MezzeCard; 