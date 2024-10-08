import { Swiper } from "swiper/react";
import "../../assets/style/SliderEventos.css"
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Pagination } from 'swiper/modules';
import { SwiperSlide } from "swiper/react";


const SliderServicios = () => {
    return (
        <>
            <div className="container my-4">
                <h2 className=" fw-bold fs-1 text-color">También te puede interesar…</h2>
            </div>
            <div className="container container-sliderEventos">
                <Swiper
                    slidesPerView={2}
                    spaceBetween={10}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{

                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },

                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },

                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="card-event-servicios">
                            <img src="https://images.pexels.com/photos/342520/pexels-photo-342520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            <div className="capa-card-eventos-servicios">
                                <div className="container mt-5 mx-3">
                                    <h2>Nombre del evento</h2>
                                </div>
                                <a href="/fiestas" className="btn-evento-servicios">
                                    mas informacion
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card-event-servicios">
                            <img src="https://www.webcasamiento.com/wp-content/uploads/2013/03/programa-fiesta-ramo.jpg" alt="" />
                            <div className="capa-card-eventos-servicios">
                                <div className="container mt-5 mx-3">
                                    <h2>Nombre del evento</h2>
                                </div>
                                <a href="/bodas" className="btn-evento-servicios">
                                    mas informacion
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card-event-servicios">
                            <img src="https://images.pexels.com/photos/16450996/pexels-photo-16450996/free-photo-of-fiesta-partido-adolescente-celebracion.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            <div className="capa-card-eventos-servicios">
                                <div className="container mt-5 mx-3">
                                    <h2>Nombre del evento</h2>
                                </div>
                                <a href="/cumpleaños" className="btn-evento-servicios">
                                    mas informacion
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card-event-servicios">
                            <img src="https://images.pexels.com/photos/4279096/pexels-photo-4279096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            <div className="capa-card-eventos-servicios">
                                <div className="container mt-5 mx-3">
                                    <h2>Nombre del evento</h2>
                                </div>
                                <a href="/redes" className="btn-evento-servicios">
                                    mas informacion
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>


                </Swiper>
            </div>
        </>
    );
};

export default SliderServicios;