import React, { useState } from 'react';
import products from '../../db.json';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const Search = () => {
    const [query, setQuery] = useState('');
    const allProducts = products.products;

    return (


        <div className="container">

            <div className="searchInput" data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="500">
                <h6 className="text-center">Search Anything.....</h6>
                <input type="text" placeholder="Search by product name.." onChange={(e) => setQuery(e.target.value)} name="" id="" className="form-control w-50 mx-auto my-5 text-success " />


            </div>



            <div className="row">

                {
                    allProducts.filter((pd) => pd.name.toLowerCase().includes(query)).map((pd) => (

                        <div className="col-md-3 my-3">
                            <Card data-aos="flip-left"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="1000" className=" " sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    component="img"
                                    alt="productImg"
                                    height=" 150"
                                    image={pd.image}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        <h5> {pd.name}</h5>
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {pd.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">${pd.price}</Button>

                                </CardActions>
                            </Card>





                        </div>





                    ))}
            </div>

        </div>






    );
};

export default Search;