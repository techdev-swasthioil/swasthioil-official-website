import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
// import Bottle from '../assets/images/bottle.png';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './card.scss';
function Cards() {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 1440, min: 1200 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 1200, min: 991 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 991, min: 576 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 576, min: 200 },
            items: 1
        }
    }
    return (
        <div className="card_carousel">
            <Carousel
                responsive={responsive}
                // removeArrowOnDeviceType={["table", "mobile"]}
            // infinite={true}
            >
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="250"
                            image=""
                            alt="Swasthi Coconut Oil"
                        >
                        </CardMedia>
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                Swasthi Cold Press Coconut Oil 1L Bottle
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button variant="contained">
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
                                Swasthi Cold Press Coconut Oil 0.5L Bottle
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button variant="contained">
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
                                Swasthi Cold Press Coconut Oil 5L Can
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button variant="contained">
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
                        <Button variant="contained">
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
                        <Button variant="contained" >
                            ADD TO CART
                        </Button>
                    </CardActions>
                </Card>
            </Carousel>
        </div>
    )
}
export default Cards;