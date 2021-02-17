import React, { useEffect, useState } from "react";
import MezzeList from "./MezzeList";
import OrderDetails from "./OrderDetails";
import Carousel from 'react-bootstrap/Carousel'

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
      <div class="content">
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          class="carousel-pic"
          src="https://lh3.googleusercontent.com/pw/ACtC-3ewmmA_MqS_D8BJGvbgW8YZFLHDSnSDB3PlCppUESuuot1KJBD6Zh1WZu_Umsh_kd_L0JPlTzqiPgDmwrjeExQhOvVVkjCTLuGGAsPdZhiE-IdCkRWLuiTIm4X2665Mj23Pvi3x2-ZTiJYkVlJzjLI9=w2042-h1362-no?authuser=0"
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3> */}  
        </Carousel.Caption>

      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          class="carousel-pic"
          src="https://lh3.googleusercontent.com/8WY9cl7QA4LlONUM1j99MyDFcpqzhBuGGu5jB_WsAwxXNqeBW5G1oRuxu2T-EwTimWOSMKLQckuE-jwyOnaWbUsYDCLTT6yE0aemf3h9ykPQDYdF51Rygnlz0bD_y17_Tp770fiuc-M0jxiiqrpdOLs6xqjTyvfU48nWfK3gGDola93mqD-ctFpZ8wqxqhEq9zvtetLGfadx-0Nzhz2iFk7hs2oiId4uOjrVyiLE7rItNiDzXg4qg0QK-by_-GkakcAquCoWDUx98bpiuuik_fsfY4seA5BN4zwiUIsRFBwPruF0iILpwctwQ0MWDLthKjnDR4ZBbir1RTaTZpOchhbCbEjV5B1kGQd4w89DYLCMSEw2K9mhbIUEb_wHiADCKgz-EWvHnb8GHHKOgoaXsFKEJK09Cpnvsv1KvikqDPTixWUKEP68ZFSwXgO3cSTDnKDdnhJsOrft_qx-sKLx012MtuGM8o4-o8ysibvabjX3TnazzX2vbNXKdCbK7vNjmiDZ9u8vcCqr-mhrMnVRql7_Wiryn9qu7Qrtu1Ddn9eJPvc7HaRQEYS1YdvPXvGLpgFqj1aNM5W4uiSZq9lx4yYgGYyIl6f-KW7R6lFzFbCiAwe__QLtmCsaDEqBcrBAQvJ4XubXhlTy9XVI2VdzuymYZExORGJBM-S3wLeBH3rifwHO89-x2LQ6Iv9a=w1084-h1444-no?authuser=0"
          alt="Second slide"
        />

        <Carousel.Caption>
          {/* <h3>Second slide label</h3> */}
          
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          class="carousel-pic"
          src="https://lh3.googleusercontent.com/up9dUGOxfILcWvwErR3z1sftwHQVF7AlKJQotUG-wtvsoiGPBGkWiid3yzz-2xhu_nfso6MoYQjNoxaY3aRaLm8rC3gfPXZodb-yXuQvQSBC7JkRff7C4bic0yf_DmI0IT2uMbCFExMfmE6dry_N-q4y7YBdgQ6NG_U4_odiNmCkk0uy9M4JpdBO2lgYqVBPnuKm1oR_so4aM14gk-MmQFPpodgdszJav28Kv2MpgFNYGrC-PPZoUfh6GhNchFRbHqwihe2u94dBqItl-AMwLaRxJby80Qkklr8A6RNcCzn846f6E316yHpPlhTgHrSxzCjCECszvJQ6Gn0A1HXhHabA2lyVO33yA6ckjfsfxnO-J3ge8xKT28Z7du3QWTKZOjMM_R1fvoB4FlgNFUQUIoGymPj9uTayKRkMggNFSj_T3DRzQwcCHomAW5xINIJE0NbtmYuXW3FEPvNhfKIx7ZegfW2LW9pP8fXKgy2KN8aHAqe3lgjAH1zW78q1FOfV6jnDExk-_IO1MZ15-xXAHMbdUhCviv3-RgO_Km01T9Yr5Y-uyBdYjcgLrgw36-JgRkgcNerEErejgz-R3OodNkGDRRWO4KqIRcJHtbqCVWBVTvStDCcMMohWfoR2R-pypEvkbl_K7NJWg9a0pDSF1ULWfQvGPzwCkDrmeTarhWldPP79THAnvC9Q6JwS=w2118-h1444-no?authuser=0"
          alt="Third slide"
        />

        <Carousel.Caption>
          {/* <h3>Third slide label</h3> */}
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

            <h2>Menu</h2>
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
