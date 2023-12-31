import React from "react";
import './oil-product.scss';
import img from '../assets/images/070A2784.png';
import img1 from '../assets/images/070A2797.png';
import Carousel from 'react-material-ui-carousel';
import { Paper, Typography } from "@mui/material";

function Oil1LB() {
    let items = [
        {
            productImg: img,
        },
        {
            productImg: img1,
        },
        // {
        //     productImg: img2,
        // },
    ];

    function Item(props) {
        return (
            <Paper>
                <div className="product_img">
                    <img src={props.item.productImg} alt="Swasthi-1L-Bottle" />
                </div>
            </Paper>
        );
    }

    return (
        <div className="product-main">
            <div className="product-image">
                <Carousel
                    className="product_carousel"
                    // NextIcon={<CarouselNextIcon />}
                    // PrevIcon={<CarouselPrevIcon />}
                    // navButtonsAlwaysInvisible={false}
                    // navButtonsAlwaysVisible={false}
                    autoPlay={false}
                    animation={'slide'}
                    swipe={false}
                >
                    {items.map((item, i) => (
                        <Item key={i} item={item} />
                    ))}

                </Carousel>
            </div>
            <div className="product-description">
                <div className="product-title">
                    <Typography>
                        Swasthi Cold Press Coconut Oil 1L Bottle <br/>
                        <span>-12.5%</span> ₹ 350.00<br/><div className="mrp">MRP:₹ 400.00</div> 
                    </Typography>
                </div>
                <div className="product-details">

                </div>

            </div>
        </div>
    );
}

export default Oil1LB;