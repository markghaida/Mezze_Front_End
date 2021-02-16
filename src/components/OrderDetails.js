function OrderDetails({ orderDetail, handleDeleteBowl }) {
    console.log(orderDetail)
        const orderList = orderDetail.map((o) => {
            return (
                <div key={o.id}> 
                    {o.mezze.name}
                    {o.mezze.calories}
                    <button onClick={() => handleDeleteClick(o)}>Delete</button>
                </div>
            )
        })

        function handleDeleteClick(orderDetail) {
            fetch(`http://localhost:3000/orders/${orderDetail.id}`, {
              method: "DELETE",
            });
            handleDeleteBowl(orderDetail);
        }
  
    return(
       <div>{orderList}</div>
    )

}

export default OrderDetails; 