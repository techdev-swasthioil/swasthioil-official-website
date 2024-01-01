import React from "react";
import Carousel from "react-multi-carousel";
import { useNavigate, useLocation, Navigate } from 'react-router-dom';
import "react-multi-carousel/lib/styles.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import img1 from '../assets/images/070A2778.png';
import img2 from '../assets/images/070A2784.png';
import img3 from '../assets/images/070A2826.png';
import img4 from '../assets/images/070A2835.png';
import img5 from '../assets/images/070A2859.png';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './card.scss';
function Cards() {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 1440, min: 1200 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 1200, min: 756 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 756, min: 576 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 576, min: 200 },
            items: 1
        }
    }
    const navigate = useNavigate();

    return (
        <div className="card_carousel">
            <Carousel
                responsive={responsive}
            // removeArrowOnDeviceType={["table", "mobile"]}
            // infinite={true}
            >
                <Card sx={{ maxWidth: 345 }} >
                    <CardActionArea 
                    onClick={(e)=>{
						navigate('/swasthi-0.5L-bottle');
					}}	>
                        <CardMedia>
                            <img src={img1} alt="swasthi_oil" />
                        </CardMedia>
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                Swasthi Cold Press Coconut Oil 0.5L Bottle
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Typography variant="body2" color="text.secondary">
                           <span>₹200 </span> ₹175
                        </Typography>
                        {/* <Button variant="contained">
                            ADD TO CART
                        </Button> */}
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea
                    onClick={(e)=>{
						navigate('/swasthi-1L-bottle');
					}}>
                        <CardMedia >
                            <img src={img2} alt="swasthi_oil" />

                        </CardMedia>
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                Swasthi Cold Press Coconut Oil 1L Bottle
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                    <Typography variant="body2" color="text.secondary">
                           <span>₹400 </span> ₹350
                        </Typography>
                        {/* <Button variant="contained">
                            ADD TO CART
                        </Button> */}
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea
                    onClick={(e)=>{
						navigate('/swasthi-0.5L-pouch');
					}}>
                        <CardMedia >
                            <img src={img4} alt="swasthi_oil" />
                        </CardMedia>
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                Swasthi Cold Press Coconut Oil 0.5L Pouch
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                    <Typography variant="body2" color="text.secondary">
                           <span>₹200 </span> ₹175
                        </Typography>
                        {/* <Button variant="contained">
                            ADD TO CART
                        </Button> */}
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea
                    onClick={(e)=>{
						navigate('/swasthi-1L-pouch');
					}}>
                        <CardMedia>
                            <img src={img5} alt="swasthi_oil" />
                        </CardMedia>
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                Swasthi Cold Press Coconut Oil 1L Pouch
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                    <Typography variant="body2" color="text.secondary">
                           <span>₹400 </span> ₹350
                        </Typography>
                        {/* <Button variant="contained">
                            ADD TO CART
                        </Button> */}
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea
                    onClick={(e)=>{
						navigate('/swasthi-5L-can');
					}}>
                        <CardMedia>
                            <img src={img3} alt="swasthi_oil" />
                        </CardMedia>
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                Swasthi Cold Press Coconut Oil 5L Can
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                    <Typography variant="body2" color="text.secondary">
                           <span>₹2000 </span> ₹1750
                        </Typography>
                        {/* <Button variant="contained" >
                            ADD TO CART
                        </Button> */}
                    </CardActions>
                </Card>
            </Carousel>
        </div>
    )
}
export default Cards;