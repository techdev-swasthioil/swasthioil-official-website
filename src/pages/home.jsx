import React from 'react'
import Carousel from 'react-material-ui-carousel';
import Carousel1 from 'react-multi-carousel';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import car_img from '../assets/images/banner.png';
import car_img2 from '../assets/images/coco3.jpg';
import Pure from '../assets/images/Pure.png';
import Health from '../assets/images/Health.png';
import Hair from '../assets/images/Hair.png';
import Edible from '../assets/images/Edible.png';
import Shelf from '../assets/images/Shelf.png';
import Skin from '../assets/images/Skin.png';
import { Button, Paper, Typography } from '@mui/material';
import { CardActionArea, CardActions } from '@mui/material';
import { CarouselNextIcon, CarouselPrevIcon } from '../renders/icon';
import { useNavigate, useLocation } from 'react-router-dom';
import './home.scss'
import Cards from '../renders/card';

function Home() {

  const navigate = useNavigate();
  const location = useLocation();

  let items = [
    // {
    //     bannerImg: car_img,
    // },
    {
        bannerImg: car_img2,     
    },
    // {
    //   bannerImg: car_img3,
    // },
  ];

  let textItems = [
    {
      text1: 'Purity Redefined, Nature Perfected',
      description: 'Experience the pure essence of life with our coconut oil – a natural choice for your well-being.'
    },
    {
      text1: 'Simple Elegance, Simply Pure',
      description: "Experience the elegance of simplicity with our pure coconut oil – where simplicity meets the essence of pure living."
    }
  ]

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 1440, min: 1200 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 1200, min: 756 },
      items: 2
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
        <div className="carousel_overlay">
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
          {/* <Button
					  className="register_btn"
					  variant="contained"
					  onClick={(e) => {
						  window.open('');
					  }}
				  >
					  <span>REGISTER NOW</span>
				  </Button> */}
        </div>

      </div>
      <div className='Product_container'>
        <div className='Product_header'>
          <Typography>Products</Typography>
        </div>
        <div className='Product_display'>
          <Cards />
        </div>
      </div>
      <div className='Coco_container'>
        <div className='Coco_title'>
          <Typography>Experience the Extraordinary with Coconut Oil!</Typography>
        </div>
        <div className='Coco_description'>
          <div className='Coco_left'>
            <Typography>
              <span>Cold-Pressed Coconut Oil</span><br />
              What sets our cold-pressed coconut oil apart from conventionally roasted oil is its preservation of essential nutrients, natural aroma, and flavour. By avoiding the high temperatures used in the roasting process, we ensure that the oil remains rich in antioxidants, vitamins, and the pure, unadulterated goodness of coconuts. This translates into an oil that not only enhances the flavour of your dishes but also provides a myriad of health benefits.<br />
            </Typography>
          </div>
          <div className='Coco_right'>
            <Typography>" Unlock the secret to nourishment like no other. Coconut oil, a treasure trove of wellness, is your closest ally, second only to mother's milk, when it comes to lauric acid. This extraordinary natural elixir offers a source of lauric acid unparalleled in the culinary world. Discover the power of coconut oil, a culinary marvel that has been cherished for generations, and elevate your well-being to new heights. Embrace the wisdom of nature and make coconut oil an essential part of your daily regimen, celebrating its remarkable resemblance to the liquid gold of life's purest source. "</Typography>
          </div>
        </div>
      </div>
      <div className='Speciality_container'>
        <div className='Speciality_title'>
          <Typography>Our Speciality & Health Benifits</Typography>
        </div>
        <div className='Speciality_description1'>
          <div className='sp_card'>
            <div className='sp_img'>
              <img className='img_vector' src={Pure} />
            </div>
            <div className='sp_content'>
              <Typography><span>Pure</span><br />"Swasthi guarantees that all coconut oil variants are 100% pure, completely devoid of any adulterants, fragrances, additives, preservatives, or chemicals."
              </Typography>

            </div>
          </div>
          <div className='sp_card'>
            <div className='sp_img'>
              <img className='img_vector' src={Health} />
            </div>
            <div className='sp_content'>
              <Typography><span>Healthy</span><br />"Highly digestible, enhances metabolic function, supports weight management, lowers unhealthy cholesterol levels, promotes cardiovascular well-being, strengthens the immune system, and is renowned for its immunity-boosting properties."
              </Typography>
            </div>

          </div>
          <div className='sp_card'>
            <div className='sp_img'>
              <img className='img_vector' src={Shelf} />
            </div>
            <div className='sp_content'>
              <Typography><span>Long Shelf Life</span><br />"Careful selection of premium edible coconut/copra, meticulous sun drying to eliminate moisture, fine filtering, and airtight packaging guarantee an extended shelf life upto 6 months."
              </Typography>
            </div>
          </div>
          <div className='sp_card'>
            <div className='sp_img'>
              <img className='img_vector' src={Edible} />
            </div>
            <div className='sp_content'>
              <Typography><span>Edible use</span><br />
                "Swasthi coconut oil is a versatile choice for all your culinary needs, whether in deep frying, salad dressings, shallow frying, or even raw consumption. Its popularity shines in the traditional dishes of the Konkan regions and also South Indian cuisine."
              </Typography>
            </div>
          </div>

        </div>
        <div className='Speciality_description2'>
          <div className='sp_card'>
            <div className='sp_img'>
              <img className='img_vector' src={Hair} />
            </div>
            <div className='sp_content'>
              <Typography><span>Hair Care</span><br />"Nurtures the skin, hydrates and conditions the hair, fortifies the roots, maintains a refreshing scalp, and is a popular choice as a hair oil, whether used as it is or blended with various additives of your choice."
              </Typography>
            </div>

          </div>
          <div className='sp_card'>
            <div className='sp_img'>
              <img className='img_vector' src={Skin} />
            </div>
            <div className='sp_content'>
              <Typography><span>Skin Care</span><br />"Coconut oil offers anti-inflammatory properties, aids in maintaining skin hydration, effectively combats acne, and provides additional benefits for overall skin health."
              </Typography>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='Testimonials'>
        <Carousel1
          responsive={responsive}
          autoPlay={true}
          stopAutoPlayOnHover={false}
          interval={10000}
          animation={'slide'}
          swipe={true}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          infinite={true}
        >
          <Card sx={{ maxWidth: 375 }} >
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur velit incidunt tempore modi dolore quo iste, magnam, quos facilis nihil quae nulla accusamus quod tempora alias beatae exercitationem maiores fugit!
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 375 }} >
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, dolores laboriosam minus, odio perferendis recusandae iste explicabo labore consequuntur, itaque id sequi quis accusamus maxime dolorum velit rem fuga molestiae!
              </Typography>
            </CardContent>

          </Card>
          <Card sx={{ maxWidth: 375 }} >
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti repellendus iusto iste dolore aliquid qui, saepe et modi. Corrupti ipsum pariatur autem atque ad corporis suscipit ducimus quod temporibus commodi.
              </Typography>
            </CardContent>

          </Card>
        </Carousel1>

      </div> */}
    </div>
  )
}

export default Home