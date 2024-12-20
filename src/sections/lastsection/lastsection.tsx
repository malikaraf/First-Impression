import React from 'react';
import '@xyflow/react/dist/style.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Lastsection = () => (
  <div style={{ height: '100vh', backgroundColor: 'white', display: 'flex', flexDirection:'row'}}>
    
    <Swiper style={{ }}
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={2}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      loop={true}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide style={{backgroundImage:"url('/slider_image1.jpg')"}}></SwiperSlide>
      <SwiperSlide style={{backgroundImage:"url('/slider_image2.jpg')"}}></SwiperSlide>
      <SwiperSlide style={{backgroundImage:"url('/slider_image3.jpg')"}}></SwiperSlide>
      <SwiperSlide style={{backgroundImage:"url('/slider_image4.jpg')"}}>Slide 4</SwiperSlide>
      
    </Swiper>
    
    <Swiper style={{ }}
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={2}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      loop={true}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide style={{backgroundImage:"url('/slider_image1.jpg')"}}></SwiperSlide>
      <SwiperSlide style={{backgroundImage:"url('/slider_image2.jpg')"}}></SwiperSlide>
      <SwiperSlide style={{backgroundImage:"url('/slider_image3.jpg')"}}></SwiperSlide>
      <SwiperSlide style={{backgroundImage:"url('/slider_image4.jpg')"}}>Slide 4</SwiperSlide>
      
    </Swiper>
    
  </div>
);

export default Lastsection;
