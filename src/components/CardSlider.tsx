import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from "@/styles/CardSlider.module.scss";

const cardsData = [
  {
    title: 'Card 1',
    description: 'Description for Card 1',
    image: 'https://res.cloudinary.com/dkjn33zdf/image/upload/v1702611074/p2_1_ayljuj.png',
  },
  {
    title: 'Card 2',
    description: 'Description for Card 2',
    image: 'https://res.cloudinary.com/dkjn33zdf/image/upload/v1702611074/p2_1_ayljuj.png',
  },
  // Add more cards as needed
  {
    title: 'Card 3',
    description: 'Description for Card 1',
    image: 'https://res.cloudinary.com/dkjn33zdf/image/upload/v1702611074/p2_1_ayljuj.png',
  },
  {
    title: 'Card 4',
    description: 'Description for Card 2',
    image: 'https://res.cloudinary.com/dkjn33zdf/image/upload/v1702611074/p2_1_ayljuj.png',
  },
  {
    title: 'Card 5',
    description: 'Description for Card 1',
    image: 'https://res.cloudinary.com/dkjn33zdf/image/upload/v1702611074/p2_1_ayljuj.png',
  },
  {
    title: 'Card 6',
    description: 'Description for Card 2',
    image: 'https://res.cloudinary.com/dkjn33zdf/image/upload/v1702611074/p2_1_ayljuj.png',
  },
];

function CardSlider() {
  const settings = {
    accessibility:true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
  return (
    <div className={styles.CardSlider}>
      <Slider {...settings}>
      {cardsData.map((card, index) => (
        <div key={index} className={styles.card}>
          <h2>{card.title}</h2>
          <p>{card.description}</p>
          <img src={card.image} alt={`Card ${index + 1}`} />
        </div>
      ))}
      </Slider>
    </div>
  );
}

export default CardSlider;
