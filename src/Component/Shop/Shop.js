import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Courses from '../Courses/Courses';
import './Shop.css'

const Shop = () => {
const[shopDatas, setshopDatas] = useState([])
const[cart, setcart] = useState([])

useEffect(() =>{
    fetch('./Course.json')
    .then(res => res.json())
    .then(data => setshopDatas(data))
},[])

const handleAddToCart = (shopData) =>{
   
    const newCart = [...cart, shopData];
    setcart(newCart);
}

    return (
        <div className='shop-container'>

            <div className='course-handle'>
                
            {
                shopDatas.map(shopData => <Courses 
                    key={shopDatas.courseName}
                    shopData={shopData}
                    handleAddToCart = {handleAddToCart}
                    
                    >

                    </Courses>)
            }
            </div>
            <div className='cart-handle'>
               <Cart cart={cart}
               >

               </Cart>
            </div>

        </div>
    );
};

export default Shop;