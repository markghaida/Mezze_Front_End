function OrderDetails({ orderDetail, handleDeleteBowl }) {
    console.log(orderDetail)
        const orderList = orderDetail.map((o) => {
            return (
                <div key={o.id}>
                    <br></br>
                    <p>{o.mezze.name}</p>
                    <p>${o.mezze.price}</p>
                    <button onClick={() => handleDeleteClick(o)}>Delete</button>
                    <br></br>
                </div>
            )
        })

        let total = 0; 
        const orderTotal = orderDetail.forEach((o) => {
            return (
                <div key={o.id}>
                    <p>${total += o.mezze.price}</p>
                </div>
            )
        })

        let totalPoints = 0; 
        const pointsTotal = orderDetail.forEach((o) => {
            return (
                <div key={o.id}>
                    <p>${totalPoints += o.mezze.points}</p>
                </div>
            )
        })

        function handleDeleteClick(orderDetail) {
            fetch(`https://habibi-mezze.herokuapp.com/${orderDetail.id}`, {
              method: "DELETE",
            });
            handleDeleteBowl(orderDetail);
        }

    return (
       <div class="footer">
          
           {orderList}
           <br></br>
           <b>Order Total: ${total}</b> 
           <br></br>
           Total Points: {totalPoints}
           <br></br>
           <br></br>
           <br></br>
           <br></br>
          
       </div>
       
    )

}

export default OrderDetails;