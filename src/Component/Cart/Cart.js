import React from 'react';
import './Cart.css'
const Cart = (props) => {
    console.log(props)
    const {cart} = props;

    let total = 0;
    let enrollment = [];
    for(const product of cart){
        
        total =total + product.enrollmentFee;
        enrollment += product.courseName + ', ';
             
      
    }

    return (
        <div className='cart-style'>
             <div>
             <h4 className='order-summary'>Order Summary</h4>
                <h5>Items Order:{props.cart.length}</h5>
                <h5>Total:${total}</h5>
                
             </div>
            <div>
                <h3 className='order-summary'>List of Enrolling Courses</h3>
                    <p>{enrollment}</p>
               
            </div>

        </div>
    );

};

export default Cart;