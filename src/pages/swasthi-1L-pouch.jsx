import React from "react";
import './oil-product.scss';
import img from '../assets/images/070A2859.png';
import img1 from '../assets/images/070A2870.png';
import nf from '../assets/images/nutritionalfacts.jpg';
import Carousel from 'react-material-ui-carousel';
import { Paper, Typography } from "@mui/material";

function Oil1LP() {
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
                        Swasthi Cold Press Coconut Oil 1L Pouch <br/>
                        <span>-12.5%</span> ₹ 350.00<br/><div className="mrp">MRP:₹ 400.00</div> 
                    </Typography>
                </div>
                <div className="product-details">
                <div className="product-details-header">
                        <Typography>
                            Product Description
                        </Typography>
                    </div>
                    <div className="product-details-body">
                        <div className="product-descript">
                            <div className="parameter">
                                Net Volume <br/>
                                Special Features <br/>
                                Extraction process <br/>
                                Speciality
                            </div>
                            <div className="values">
                                1000 Mililitres (1 Litre)<br/>
                                Cold pressed,Unrefined<br/>
                                Traditional Rotary Machine<br/>
                                Natural,GMO free,Gluten free,Vegan
                            </div>
                        </div>
                        <img src={nf} alt="nutritional facts" />
                    </div>
                    <div className="product-details-tail">
                        <div className="about-item">
                        <Typography>
                        <span>About this item</span><br/>
                        <ul>
                        <li>Swasthi Coconut Oil is a pure coconut oil extracted from sun-dried coconuts from the Konkan Coast.</li>
                        <li>Is rich in medium-chain triglycerides (MCTs), which are easily digestible and provide a sustained source of energy.</li>
                        <li>Is naturally moisturizing and nourishing for skin and hair. </li>
                        <li>Is unrefined and free of chemicals, preservatives, and artificial flavours.</li> 
                        <li>Is perfect for cooking, baking, hair care, and skin care.</li>
                        </ul>
                        </Typography>
                        </div>
                        <div className="caution">
                        <Typography>
                            <span>Caution :</span> Coconut oil will solidify below 24°C.
                            Clouding below this temperature is natural and does not affect the quality of the oil.
                            To liquify, place the container in warm water or in sunlight.
                        </Typography>
                        </div>
                        
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Oil1LP;