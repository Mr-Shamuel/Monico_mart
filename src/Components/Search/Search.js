import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import products from '../../db.json';
import Zoom from 'react-reveal/Zoom';
const Search = () => {
    const [query, setQuery] = useState('');
    const allProducts = products.products;

    return (

        <div className="container">
          <Zoom top>
          <h6 className="text-center">Search Anything.....</h6>
            <input type="text" placeholder="Search by product name.." onChange={(e) => setQuery(e.target.value)} name="" id="" className="form-control w-50 mx-auto my-5 text-success " />
          </Zoom>
            <div className="row">

                {
                    allProducts.filter((pd) => pd.name.toLowerCase().includes(query)).map((pd) => (

                        <div className="col-md-3 my-3">
                            <Zoom>
                                <Card sx={{ maxWidth: 355 }}>
                                    <CardMedia
                                        component="img"
                                        alt="productImg"
                                        height="140"
                                        image={pd.image}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {pd.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {pd.description}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        {/* <Button size="small" className="d-flex mx-auto text-danger"></Button> */}
                                        <Button size="small" variant="contained" color="success" className="d-flex mx-auto">Price: ${pd.price}</Button>
                                    </CardActions>
                                </Card>
                            </Zoom>




                        </div>





                    ))}
            </div>

        </div>

    );
};

export default Search;