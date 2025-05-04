import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const AppSlider = () => {
  return (
    <div className="max-w-6xl mx-auto my-10">
      <Swiper
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <img
            src="https://img.freepik.com/free-vector/gradient-business-banner-template_23-2149717827.jpg?t=st=1746396837~exp=1746400437~hmac=2bfeac3724f9d5306adfc6a5b4fb51f4261583db119ce314e664af8feed9ad58&w=1380"
            alt="Slide 1"
            className="w-full h-[300px] object-cover rounded-xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.freepik.com/free-psd/real-estate-house-property-facebook-cover-banner-template_120329-1852.jpg?t=st=1746396826~exp=1746400426~hmac=4004de7589f9c7170fb6fe7657151659c0dc2c07c714d161e64ea2252fce39e3&w=826"
            alt="Slide 2"
            className="w-full h-[300px] object-cover rounded-xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.freepik.com/free-vector/banking-business-sale-banner-template_23-2150972725.jpg?t=st=1746396770~exp=1746400370~hmac=9de841af96cbd7c552dad7781527c86aaf6df4412e14a3b3b79e6c0bd131cd3c&w=1380"
            alt="Slide 3"
            className="w-full h-[300px] object-cover rounded-xl"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AppSlider;
