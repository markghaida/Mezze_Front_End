import React, { useEffect, useState } from "react";
import MezzeList from "./MezzeList";
import OrderDetails from "./OrderDetails";

function MezzePage() {

    const [orderDetail, setOrderDetail] = useState([])
    const [mezzes, setMezzes] = useState([]);
        useEffect(() => {
            fetch(`http://localhost:3000/mezzes`)
            .then(res => res.json())
            .then(setMezzes);  
        }, []);
   

    function handleOrder(bowlDetails){
        // when we click on the bowl that we want 
        // we want THAT bowls details to populate in the order details
        // console.log(bowlDetails.mezze.name)
      
        console.log(bowlDetails);

        setOrderDetail([...orderDetail, bowlDetails])
    }

    // function handleAddBowl(newOrder) {
    //     const updatedOrder = {newOrder};
    //     setOrderDetail(updatedOrder); 
    // }

    function handleDeleteBowl(bowl) {
        const updatedOrderDetail = orderDetail.filter((o) => 
            o.id !== bowl.id 
    )
       //if bowl.id != orderdetail.id 
        //start from here, and remove a bowl
        setOrderDetail(updatedOrderDetail); 
    }

    return (
        <div>
            <MezzeList mezzes={mezzes} handleOrder={handleOrder} /> 
            <OrderDetails orderDetail={orderDetail} handleDeleteBowl={handleDeleteBowl}/> 
        </div>)


}





export default MezzePage; 
