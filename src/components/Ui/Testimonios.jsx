import "../../assets/style/Testimonios.css";
import SliderComents from "./SliderComents";

const Testimonios = () => {
    return (
        <>
        <div className="container ps-4">
            <h2 className=" fw-bold fs-1 text-color">Testimonios</h2>
        </div>
        <div className='testimonios' data-aos="fade-up">
            <div className="container-slider">
                <SliderComents></SliderComents>
            </div>
        </div>
        </>
    );
};

export default Testimonios;