function OrderDetails({ orderDetail, handleDeleteBowl }) {
    console.log(orderDetail)
        const orderList = orderDetail.map((o) => {
            return (
                <div key={o.id}>
                    <p>{o.mezze.name}</p>
                    <p>${o.mezze.price}</p>
                    <button onClick={() => handleDeleteClick(o)}>Delete</button>
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

        function handleDeleteClick(orderDetail) {
            fetch(`http://localhost:3000/orders/${orderDetail.id}`, {
              method: "DELETE",
            });
            handleDeleteBowl(orderDetail);
        }

    return (
       <div class="footer">
          
           {orderList}
           <p>Order Total: ${total}</p>
          
       </div>
       
    )

}

export default OrderDetails;