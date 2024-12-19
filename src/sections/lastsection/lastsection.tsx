import React from 'react';
import { ReactFlow, Background } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import {  Page,  } from 'framework7-react';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const initialNodes = [
  { id: '1', data: { label: 'Idk' }, position: { x: 100, y: 100 } },
  { id: '2', data: { label: 'Idk' }, position: { x: 100, y: 200 } },
  { id: '3', data: { label: 'Idk' }, position: { x: 100, y: 300 } },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e2-3', source: '2', target: '3' },
];

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
