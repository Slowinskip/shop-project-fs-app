import React from 'react';
import CarouselRc from '../../features/Carousel/CarouselRc';
import FeatureProduct from '../../features/FeaturesProduct/FeatureProduct';
import ImageBox from '../../features/ImageBox/ImageBox';

const Home = () => {
  return (
    <>
      <CarouselRc />
      <ImageBox />
      <FeatureProduct />
    </>
  );
};

export default Home;
