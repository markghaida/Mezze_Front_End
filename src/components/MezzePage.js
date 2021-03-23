import React, { useEffect, useState } from "react";
import MezzeList from "./MezzeList";
import OrderDetails from "./OrderDetails";
import Carousel from 'react-bootstrap/Carousel'
import Dropdown from 'react-bootstrap/Dropdown'


function MezzePage() {

    const [orderDetail, setOrderDetail] = useState([])
    const [mezzes, setMezzes] = useState([]);
    const [filter, setFilter] = useState("All");
    
        useEffect(() => {
            fetch(`https://habibi-mezze.herokuapp.com/mezzes`)
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

    function handleVegetarian() {
     let vegetarianMezzes = mezzes.filter((mezze) => mezze.vegetarian === true)
      setMezzes(vegetarianMezzes)
    }


    function allMezzes(){
       
          fetch(`https://habibi-mezze.herokuapp.com/mezzes`)
          .then(res => res.json())
          .then(setMezzes);  
    
    }
    

    return (
      <div class="content">
          <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-75"
              class="carousel-pic"
              src="https://i.ibb.co/g6LBzJY/carousel-images-3.png"
              alt="First slide"
            />
            <Carousel.Caption>
              {/* <h3>First slide label</h3> */}  
            </Carousel.Caption>

          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-75"
              class="carousel-pic"
              src="https://i.ibb.co/drXR4rX/carousel-images-2.png"
              alt="Second slide"
            />

            <Carousel.Caption>
              {/* <h3>Second slide label</h3> */}
              
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-75"
              class="carousel-pic"
              src="https://i.ibb.co/zxTxp0K/carousel-images-1.png"
              alt="Third slide"
            />

            <Carousel.Caption>
              {/* <h3>Third slide label</h3> */}
              
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
          <br></br>
          <br></br>
            <h2>Menu</h2>

            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Filter
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={() => setFilter("All"), allMezzes}>All</Dropdown.Item>
                <Dropdown.Item onClick={() => setFilter("Vegetarian"), handleVegetarian}>Vegetarian</Dropdown.Item>
               
              </Dropdown.Menu>
            </Dropdown>
            

            <MezzeList mezzes={mezzes} handleOrder={handleOrder} /> 
            <div>
            <hr></hr>
               <h2>Order Details</h2> 
               <hr></hr>    
                <OrderDetails orderDetail={orderDetail} handleDeleteBowl={handleDeleteBowl}/>
            </div>
        </div>
        )


}





export default MezzePage; 
