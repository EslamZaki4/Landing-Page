import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './News.css';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { SlArrowRight } from 'react-icons/sl';

import swiperImage1 from '../../assets/images/sliderImages/ColoniaDelSacramento (1).png';
import swiperImage2 from '../../assets/images/sliderImages/Atardecer.png';
import swiperImage3 from '../../assets/images/sliderImages/Atardecer (1).png';
import swiperImage4 from '../../assets/images/sliderImages/CasaPueblo.png';
import swiperImage5 from '../../assets/images/sliderImages/CasaPueblo (1).png';


const newsData = [
  {
    image: swiperImage1,
    date: '1 Mar.2024',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit elit, bibendum volutpat platea mi, adipiscing eget magna. Eu nulla ut urna venenatis velit et tincidunt. Id vitae velit.'
  },
  {
    image: swiperImage2,
    date: '2 Mar.2024',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit elit, bibendum volutpat platea mi, adipiscing eget magna. Eu nulla ut urna venenatis velit et tincidunt. Id vitae velit.'
  },
  {
    image: swiperImage3,
    date: '3 Mar.2024',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit elit, bibendum volutpat platea mi, adipiscing eget magna. Eu nulla ut urna venenatis velit et tincidunt. Id vitae velit.'
  },
  {
    image: swiperImage4,
    date: '4 Mar.2024',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit elit, bibendum volutpat platea mi, adipiscing eget magna. Eu nulla ut urna venenatis velit et tincidunt. Id vitae velit.'
  },
  {
    image: swiperImage5,
    date: '5 Mar.2024',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit elit, bibendum volutpat platea mi, adipiscing eget magna. Eu nulla ut urna venenatis velit et tincidunt. Id vitae velit.'
  }
  
];

function News() {
  return (
    <div className="mx-2 lg:mx-10 md:mx-5">
      <div className="flex justify-center items-center">
        <p className="text-title text-3xl mt-5 font-semibold">
          <span className="inline-block border-b-4 border-secondary pb-2">
            New
          </span>
          s
        </p>
      </div>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {newsData.map((news, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <img src={news.image} alt={`slide_image_${index + 1}`} className="w-full h-full object-cover" />
              <div className="text-[20px] absolute top-10 text-start left-1/2 transform -translate-x-1/2 w-[90%] text-white p-4 rounded-lg">
                <p>{news.date}</p>
                <p className="pt-5">{news.description}</p>
                <div className="flex items-center gap-1 mt-20 mx-2" dir="rtl">
                  <SlArrowRight size={13} color="white" />
                  <p className="text-primary text-[20px] border-b-2 p-0 border-primary cursor-pointer">Learn More</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default News;
