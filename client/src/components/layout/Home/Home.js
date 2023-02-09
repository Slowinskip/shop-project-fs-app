import React from 'react';
import Quantity from '../../common/Quantity/Quantity';
import CarouselRc from '../../features/Carousel/CarouselRc';
import FeatureProduct from '../../features/FeaturesProduct/FeatureProduct';
import ImageBox from '../../features/ImageBox/ImageBox';

const Home = () => {
  return (
    <>
      <Quantity />
      <CarouselRc />
      <ImageBox />
      <FeatureProduct />
    </>
  );
};

export default Home;
