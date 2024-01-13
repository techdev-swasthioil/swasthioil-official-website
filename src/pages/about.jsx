import React from 'react';
import { Typography } from '@mui/material';
import k_img from '../assets/images/Kateel.jpg';
import './about.scss';

function About() {
  return (
    <div className='about_container'>
      <div className='Header'>
        <Typography>About Us</Typography>
      </div>
      <div className='intro'>
        <Typography>
          Welcome to Swasthi Coconut Oil - A Tradition of Purity and Quality Since 1968!
        </Typography>
      </div>
      <div className='Our_journey'>
        <div className='Oj_header'>
          <Typography>Our Journey</Typography>
        </div>
        <div className='Oj_content'>
          <Typography>In the heart of 1968, nestled within the lush coconut groves of the Temple town Udupi, a humble yet ambitious dream was born. This dream was none other than Swasthi, a coconut oil brand that has been synonymous with purity and quality for over half a century. Since our inception, we have taken pride in carrying forward the age-old tradition of producing coconut oil using the revered rotary machine “The gaana”.</Typography>
        </div>
      </div>
      <div className='Our_mission'>
        <div className='Om_header'>
          <Typography>Our Mission</Typography>
        </div>
        <div className='Om_content'>
          <Typography>At Swasthi, our mission is simple yet profound: to provide our customers with the purest and most nourishing coconut oil while preserving the rich heritage of the cold pressed 'gaana' method. We are committed to maintaining the highest quality standards, ensuring that every drop of our coconut oil retains the essence and benefits of the coconut fruit.</Typography>
        </div>
      </div>
      <div className='Our_vision'>
        <div className='Ov_header'>
          <Typography>Our Vision</Typography>
        </div>
        <div className='Ov_content'>
          <Typography>Our vision is to be a trusted companion on your journey to a healthier and happier life. We strive to spread the goodness of pure, cold-pressed coconut oil to every home. We envision a world where the knowledge and appreciation of traditional, natural methods like the 'gaana' machine are passed down through generations, fostering a deeper connection with the earth and a sustainable future.</Typography>
        </div>
      </div>
      <div className='tradition'>
        <div className='t_header'>
          <Typography>The 'gaana' Method: Preserving Tradition and Purity</Typography>
        </div>
        <div className='t_content'>
          <Typography>
            We take immense pride in our commitment to preserving the traditional method of extracting coconut oil using the 'gaana' machine. This age-old practice involves grinding coconut flesh to extract oil in a slow, cold-pressed manner. The 'gaana' method, in contrast to roasting, ensures that the oil retains its full spectrum of nutrients and natural flavours.
          </Typography>
        </div>
      </div>
      <div className='support'>
        <div className='s_header'>
          <Typography>Supporting Local Communities</Typography>
        </div>
        <div className='s_content'>
          <Typography>
            At Swasthi, we don't just focus on producing exceptional coconut oil, we also prioritise giving back to the communities that have been an integral part of our journey. We source our coconuts from local farmers, providing them with a sustainable source of income and contributing to the well-being of our community. By choosing our products, you're not only benefiting from high-quality coconut oil but also supporting local livelihoods.
          </Typography>
        </div>
      </div>
      <div className='needs'>
        <div className='n_header'>
          <Typography>A Product for Every Need</Typography>
        </div>
        <div className='n_content'>
          <Typography>
            Whether you're a culinary enthusiast, a health-conscious individual, or simply someone who appreciates the nourishing benefits of coconut oil, we have a product to suit your needs. From our pure, unrefined coconut oil for cooking to our special blends for skincare and haircare, we've got you covered. Our range of coconut oil products is designed to enhance your life in a variety of ways.
          </Typography>
        </div>
      </div>
      <div className='join'>
        <div className='j_header'>
          <Typography>Join the Swasthi Family</Typography>
        </div>
        <div className='j_content'>
          <Typography>
            We invite you to explore our website and discover the diverse uses and benefits of our coconut oil. From delicious recipes to beauty tips and wellness advice, we're here to assist you in making the most of our products. Join our journey, and let us be a part of yours as you embark on a path towards healthier, happier living.
          </Typography>
        </div>
      </div>
      <div className='contact'>
        <div className='c_header'>
          <Typography>Contact Us</Typography>
        </div>
        <div className='c_content'>
          <Typography>
            Have questions, suggestions, or feedback? We'd love to hear from you. Feel free to reach out to us through our Contact Us page, and our friendly team will be happy to assist you.
          </Typography>
        </div>
      </div>
      <div className='Kateel_container'>
        <div className='k_title'>
          <Typography>Our Pillar of Blessings</Typography>
        </div>
        <div className='k_description'>
          <div className='k_mid'>
            <div className='k_image'>
              <img className='k_img' src={k_img} />
              </div>
            <Typography>Kateel Shri Durgaparameshwari</Typography>
          </div>
        </div>
      </div>
      <div className='conclusion'>
        <Typography>
          "Thank you for choosing Swasthi. We look forward to being a part of your daily life and sharing the pure, traditional goodness of our coconut oil with you and your family. Together, let's embrace nature's gift and experience the magic of Swasthi coconut oil."
        </Typography>
      </div>
    </div>
  )
}

export default About