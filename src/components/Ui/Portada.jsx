import { useEffect, useRef } from "react";
import "../../assets/style/Portada.css";
import video from "../../assets/videos/video-fiesta.mp4";
import evento from "../../assets/img/events.jpeg";
import magicFilms from "../../assets/img/Magic.png"

const Portada = () => {

    const videoRef = useRef(null);
    const startTime = 12; // Segundo desde el que quieres que inicie el video
    const endTime = 60; // Segundo hasta el que quieres que se haga el loop
  
    useEffect(() => {
      const videoElement = videoRef.current;
  
      const handleLoadedMetadata = () => {
        videoElement.currentTime = startTime;
        videoElement.play();
      };
  
      const handleTimeUpdate = () => {
        if (videoElement.currentTime >= endTime) {
          videoElement.currentTime = startTime;
        }
      };
  
      videoElement.addEventListener('loadedmetadata', handleLoadedMetadata);
      videoElement.addEventListener('timeupdate', handleTimeUpdate);
  
      return () => {
        videoElement.removeEventListener('loadedmetadata', handleLoadedMetadata);
        videoElement.removeEventListener('timeupdate', handleTimeUpdate);
      };
    }, [startTime, endTime]);


    return (
        <div className='portada'>
          <img src={evento} alt="foto de fiesta"  className="img-portadaEvento"/>
            <video src={video} autoPlay muted loop playsInline className="rotated-video" ref={videoRef}>
                Your browser does not support the video tag.
            </video>
            <div className="capa-portada">
                <div className="container" data-aos="fade-up">
                    <div className="container">
                        {/* <h1 className="display-2 fw-bold ">
                            <span className="text-color me-3">Magic Films</span>
                            Contenido Audiovisual</h1> */}
                            <img src={magicFilms}  alt="" />
                    <button className="btn-portada mt-4">Contáctanos</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portada;