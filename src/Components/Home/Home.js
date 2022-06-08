import React, { useState } from 'react';
import products from '../../db.json';
import Products from '../Products/Products';
import './Home.css';
import Cart from '../Cart/Cart';
import cate from '../../Img/cate.png';
import Banner from '../Banner/Banner';
import Slide from 'react-reveal/Slide';
const Home = () => {
    const allProducts = products.products;


    const [data, setData] = useState(allProducts);
    const [cart, setCart] = useState([]);
    //filtering categories
    const filterResult = (items) => {

        const result = allProducts.filter((curent_data) => {
            return curent_data.category === items;

        });
        setData(result);
        console.log(result[0].name);
    }

    const handleAddProduct = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);

    }





    return (
        <div className="  ">
            <Banner></Banner>

            <div className="row mt-5 pt-5">
                <Slide left>
                    <div className="col-md-2">

                        <div className="category_container">

                            <h4 className="text-center"><img style={{ height: "25px", marginBottom: "6px" }} src={cate} alt="" /> All Categories</h4>
                            <button className="btn w-100 mb-4" onClick={() => filterResult('Meat')}>Meat</button>
                            <button className="btn  w-100 mb-4" onClick={() => filterResult('Fish')}>Fish</button>
                            <button className="btn  w-100 mb-4" onClick={() => filterResult('Milk')}>Milk</button>
                            <button className="btn  w-100 mb-4" onClick={() => filterResult('Beverages')}>Beverages</button>
                            <button className="btn  w-100 mb-4" onClick={() => filterResult('Snacks')}>Snacks</button>
                            <button className="btn  w-100 mb-4" onClick={() => filterResult('Fruits')}>Fruits</button>
                            <button className="btn  w-100 mb-4" onClick={() => setData(allProducts)}>All</button>


                        </div>

                    </div>
                </Slide>


                <div className="Products_container col-md-8">
                    <div className="Products">

                        <div className="row">

                            {
                                (data).map(pd => <Products pd={pd} handleAddProduct={handleAddProduct} key={pd.id}></Products>)
                            }

                        </div>


                    </div>

                </div>


              
                <div className="cart_container borders col-md-2">
                <Slide right>
                    <Cart cart={cart}></Cart>
                    </Slide>
                </div>

                

               


            </div>


        </div>
    );
};

export default Home;