import React, { useState } from "react";

function MezzeCard({ mezze, handleOrder }) {
  const [inCart, setInCart] = useState(false);
//   console.log(mezze)

  function handleToggleCart() {
    setInCart(!inCart);
    if(inCart === false) {
      fetch(`https://habibi-mezze.herokuapp.com/orders`, {
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
      })
    }
  }

  // persist toggle to db
  // create or make a post request to db --> localhost3000/orders
  // will create singular order and add to orderDetails state variable
  //

 return (
  <li className="card">
    <b><p>{mezze.name}</p></b>
    <p>{mezze.calories} Cal</p>
    <p>${mezze.price}</p>
    <p>{mezze.description}</p>
    <img src={mezze.image} alt={mezze.name} />
    {inCart ? (
      <button className="primary" onClick={handleToggleCart}>In Cart</button>
    ) : (
      <button onClick={handleToggleCart}>Add To Cart</button>
    )}
   </li>
 )
}




export default MezzeCard;