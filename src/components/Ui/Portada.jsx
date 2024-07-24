import "../../assets/style/Portada.css";
import eventoPortada from "../../assets/img/events.jpeg";
const Portada = () => {
    return (
        <div className='portada'>
            <img src={eventoPortada} alt="" />
            <div className="capa-portada">
                <div className="container" data-aos="fade-up">
                    <div className="container">
                        <h1 className="display-1 fw-bold">Nuestra comunidad</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Dolores doloribus accusantium omnis possimus, consectetur id!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portada;