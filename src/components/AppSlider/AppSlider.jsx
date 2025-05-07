import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const AppSlider = () => {
  return (
    <div className="mx-auto mb-5">
      <Swiper
        navigation={true}
        cssMode={true}
        mousewheel={true}
        keyboard={true}
        modules={[Autoplay, Pagination, Navigation, Mousewheel, Keyboard]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/Z1fyR1fM/banner.jpg"
            alt="Slide 1"
            className="w-full  h-[230px] sm:h-[250px] md:h-[264px] lg:h-[290px] xl:h-[300px] 2xl:h-[320px] object-cover rounded-xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/Q3bn5LbC/maxresdefault.jpg"
            alt="Slide 2"
            className="w-full  h-[230px] sm:h-[250px] md:h-[264px] lg:h-[290px] xl:h-[300px] 2xl:h-[320px] object-cover rounded-xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/kgJTQ4xT/programming-hero-banner.png"
            alt="Slide 3"
            className="w-full h-[230px] sm:h-[250px] md:h-[264px] lg:h-[290px] xl:h-[300px] 2xl:h-[320px] object-cover rounded-xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/m5kdj95R/4897221.jpg"
            alt="Slide 4"
            className="w-full  h-[230px] sm:h-[250px] md:h-[264px] lg:h-[290px] xl:h-[300px] 2xl:h-[320px] object-cover rounded-xl"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AppSlider;
