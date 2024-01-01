import React from "react";
import Cards from "../renders/card";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
// import Bottle from '../assets/images/bottle.png';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './products.scss'

function Products() {
    return (
        <div className="shop_container">
            <Cards/>
            {/* <Typography>Stay tuned for the exciting product launch!</Typography> */}
            {/* <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="250"
                        image=""
                        alt="Swasthi Coconut Oil"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            Swasthi Premium Grade Coconut Oil 1L Bottle
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        ADD TO CART
                    </Button>
                </CardActions>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="250"
                        image=""
                        alt="Swasthi Coconut Oil"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            Swasthi Premium Grade Coconut Oil 0.5L Bottle
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        ADD TO CART
                    </Button>
                </CardActions>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="250"
                        image=""
                        alt="Swasthi Coconut Oil"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            Swasthi Premium Grade Coconut Oil 5L Can
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        ADD TO CART
                    </Button>
                </CardActions>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="250"
                        image=""
                        alt="Swasthi Coconut Oil"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            Swasthi Cold Press Coconut Oil 1L Pouch
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        ADD TO CART
                    </Button>
                </CardActions>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="250"
                        image=""
                        alt="Swasthi Coconut Oil"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            Swasthi Cold Press Coconut Oil 0.5L Pouch
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        ADD TO CART
                    </Button>
                </CardActions>
            </Card> */}
        </div>
    )
}
export default Products;