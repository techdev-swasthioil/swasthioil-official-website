import React from 'react'
import Carousel from 'react-material-ui-carousel';
import car_img1 from '../assets/images/coco1.jpg';
import car_img2 from '../assets/images/coco4.jpg';
import car_img3 from '../assets/images/coco3.jpg';
import k_img from '../assets/images/Kateel.jpg';
import { Button, Paper, Typography } from '@mui/material';
import { CarouselNextIcon, CarouselPrevIcon } from '../renders/icon';
import { useNavigate, useLocation } from 'react-router-dom';
import './home.scss'
import Cards from '../renders/card';

function Home() {

  const navigate = useNavigate();
  const location = useLocation();

  let items = [
    // {
    //     bannerImg: car_img1,
    // },
    // {
    //     bannerImg: car_img2,     
    // },
    {
      bannerImg: car_img3,
    },
  ];

  let textItems = [
    {
      text1: 'Donate Blood, Save Lives',
      description: 'One donation can save upto three lives. The simple, generous act of giving blood can save lives.'
    },
    {
      text1: 'Days of Gratitude',
      description: "Your birthday can be someone else's special day as well. Make your birthday memeorable by giving someone the 'Gift of Life'. Donate blood, Donate for a cause."
    }
  ]

  function Item(props) {
    return (
      <Paper>
        <div className="banner_img">
          <img src={props.item.bannerImg} alt="banner-image" />
        </div>
      </Paper>
    );
  }

  function TextItem(props) {
    return (
      <div className='overlay_text'>
        <div className='overlay_head'>
          <Typography>{props.item.text1}</Typography>
        </div>
        <div className='overlay_body'>
          <Typography>{props.item.description}</Typography>
        </div>
      </div>
    )
  }

  return (
    <div className='home_container'>
      <div className='carousel_container'>
        <Carousel
          className="banner_carousel"
          // NextIcon={<CarouselNextIcon />}
          // PrevIcon={<CarouselPrevIcon />}
          // navButtonsAlwaysInvisible={true}
          // navButtonsAlwaysVisible={false}
          autoPlay={true}
          stopAutoPlayOnHover={false}
          interval={10000}
          animation={'slide'}
          swipe={true}
        >
          {items.map((item, i) => (
            <Item key={i} item={item} />
          ))}

        </Carousel>
        {/* <div className="carousel_overlay">
          <Carousel
            className='overlay_carousel'
            interval={6000}
            // navButtonsAlwaysInvisible={true}
            indicators={false}
          >
            {textItems.map((item,i) => (
              <TextItem key={i} item={item}/>
            ))}
          </Carousel>
          <Button
					  className="register_btn"
					  variant="contained"
					  onClick={(e) => {
						  window.open('');
					  }}
				  >
					  <span>REGISTER NOW</span>
				  </Button>
        </div> */}

      </div>
      <div className='Product_container'>
        <div className='Product_header'>
          <Typography>Products</Typography>
        </div>
        <div className='Product_display'>
          <Cards/>
        </div>
      </div>
      <div className='Kateel_container'>
        <div className='k_title'>
          <Typography>Our Pillar of Blessings</Typography>
        </div>
        <div className='k_description'>
          <div className='k_right'>
            {/* <Typography>Kateel Shri Durgaparameshwari Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error ipsa amet quidem, id placeat quaerat magnam, est modi laborum, reprehenderit magni accusamus voluptates! Pariatur et tempora hic quibusdam harum blanditiis?</Typography> */}
          </div>
          <div className='k_mid'>
            <img className='k_img' src={k_img} />
          </div>
          <div className='k_left'>
            {/* <Typography>Kateel Shri Durgaparameshwari Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error ipsa amet quidem, id placeat quaerat magnam, est modi laborum, reprehenderit magni accusamus voluptates! Pariatur et tempora hic quibusdam harum blanditiis?</Typography> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home