import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import "../../assets/style/Sliderimg.css";
import { EffectCoverflow, Pagination } from 'swiper/modules';
import fiesta from "../../assets/img/events3.jpeg";


const SliderImg = () => {
    return (
        <div className='container-sliderImg container' data-aos="fade-up">
            <>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    initialSlide={4}
                    loop={true} 
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={fiesta} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://images.pexels.com/photos/801863/pexels-photo-801863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://images.pexels.com/photos/1047442/pexels-photo-1047442.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://images.pexels.com/photos/1684187/pexels-photo-1684187.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://images.pexels.com/photos/1627935/pexels-photo-1627935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={fiesta} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={fiesta} />
                    </SwiperSlide>
                </Swiper>
            </>

        </div>
    );
};

export default SliderImg;