import { Swiper } from "swiper/react";
import "../../assets/style/Slider.css"
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import { SwiperSlide } from "swiper/react";

const SliderComents = () => {
    return (
        <div>
            <>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
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
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="card-testimonial">
                            <div className="container-card-testimonial">
                                <div className="herder-card-testimonial container">
                                    <div className="usuario-img">
                                        <img src="https://images.pexels.com/photos/20637379/pexels-photo-20637379/free-photo-of-modelo-maqueta-prado-arbol.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                    </div>
                                    <div className="nombre-usuario">
                                        <span>
                                            @NombreUser
                                        </span>
                                    </div>
                                </div>
                                <div className="body-card-testimonial container">
                                    <p>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam,
                                        placeat beatae. Quia ducimus laborum quis sint nostrum est tempore incidunt.
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam,
                                        placeat beatae. Quia ducimus laborum quis sint nostrum est tempore incidunt.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card-testimonial">
                            <div className="container-card-testimonial">
                                <div className="herder-card-testimonial container">
                                    <div className="usuario-img">
                                        <img src="https://images.pexels.com/photos/20637379/pexels-photo-20637379/free-photo-of-modelo-maqueta-prado-arbol.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                    </div>
                                    <div className="nombre-usuario">
                                        <span>
                                            @NombreUser
                                        </span>
                                    </div>
                                </div>
                                <div className="body-card-testimonial container">
                                    <p>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam,
                                        placeat beatae. Quia ducimus laborum quis sint nostrum est tempore incidunt.
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam,
                                        placeat beatae. Quia ducimus laborum quis sint nostrum est tempore incidunt.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card-testimonial">
                            <div className="container-card-testimonial">
                                <div className="herder-card-testimonial container">
                                    <div className="usuario-img">
                                        <img src="https://images.pexels.com/photos/20637379/pexels-photo-20637379/free-photo-of-modelo-maqueta-prado-arbol.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                    </div>
                                    <div className="nombre-usuario">
                                        <span>
                                            @NombreUser
                                        </span>
                                    </div>
                                </div>
                                <div className="body-card-testimonial container">
                                    <p>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam,
                                        placeat beatae. Quia ducimus laborum quis sint nostrum est tempore incidunt.
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam,
                                        placeat beatae. Quia ducimus laborum quis sint nostrum est tempore incidunt.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card-testimonial">
                            <div className="container-card-testimonial">
                                <div className="herder-card-testimonial container">
                                    <div className="usuario-img">
                                        <img src="https://images.pexels.com/photos/20637379/pexels-photo-20637379/free-photo-of-modelo-maqueta-prado-arbol.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                    </div>
                                    <div className="nombre-usuario">
                                        <span>
                                            @NombreUser
                                        </span>
                                    </div>
                                </div>
                                <div className="body-card-testimonial container">
                                    <p>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam,
                                        placeat beatae. Quia ducimus laborum quis sint nostrum est tempore incidunt.
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam,
                                        placeat beatae. Quia ducimus laborum quis sint nostrum est tempore incidunt.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card-testimonial">
                            <div className="container-card-testimonial">
                                <div className="herder-card-testimonial container">
                                    <div className="usuario-img">
                                        <img src="https://images.pexels.com/photos/20637379/pexels-photo-20637379/free-photo-of-modelo-maqueta-prado-arbol.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                    </div>
                                    <div className="nombre-usuario">
                                        <span>
                                            @NombreUser
                                        </span>
                                    </div>
                                </div>
                                <div className="body-card-testimonial container">
                                    <p>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam,
                                        placeat beatae. Quia ducimus laborum quis sint nostrum est tempore incidunt.
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam,
                                        placeat beatae. Quia ducimus laborum quis sint nostrum est tempore incidunt.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card-testimonial">
                            <div className="container-card-testimonial">
                                <div className="herder-card-testimonial container">
                                    <div className="usuario-img">
                                        <img src="https://images.pexels.com/photos/20637379/pexels-photo-20637379/free-photo-of-modelo-maqueta-prado-arbol.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                    </div>
                                    <div className="nombre-usuario">
                                        <span>
                                            @NombreUser
                                        </span>
                                    </div>
                                </div>
                                <div className="body-card-testimonial container">
                                    <p>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam,
                                        placeat beatae. Quia ducimus laborum quis sint nostrum est tempore incidunt.
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam,
                                        placeat beatae. Quia ducimus laborum quis sint nostrum est tempore incidunt.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </>

        </div>
    );
};

export default SliderComents;