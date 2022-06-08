import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Products.css';
import { Zoom } from 'react-reveal';
const Products = (props) => {
    const { name, price, description, image } = props.pd;
    console.log(props);


    return (

        <div className="col-md-4 my-3 product">
            <Zoom >
                <div>
                    <Card className=" " sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            alt="productImg"
                            height=" 150"
                            image={image}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                <h5> {name}</h5>
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {description}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">${price}</Button>
                            <Button onClick={() => props.handleAddProduct(props.pd)} size="small" variant="contained" color="success"><ShoppingCartIcon></ShoppingCartIcon> Add to cart</Button>
                        </CardActions>
                    </Card>
                </div>

            </Zoom>

        </div>

    );
};

export default Products;