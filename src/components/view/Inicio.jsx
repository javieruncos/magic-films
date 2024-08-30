import { useEffect } from "react";
import "../../assets/style/Inicio.css";
import Caracteristicas from "../Ui/Caracteristicas";
import Portada from "../Ui/Portada";
import PortadaDescripcion from "../Ui/PortadaDescripcion";
import Eventos from "../Ui/Eventos";
import SobreNosotros from "../Ui/SobreNosotros";
import WspBtn from "../Ui/WspBtn";
import Aos from "aos";
import "aos/dist/aos.css"
import Servicios from "../Ui/Servicios";
import SliderImg from "../Ui/SliderImg";
import PortadaContacto from "../Ui/PortadaContacto";




const Inicio = () => {
    return (
        <main>
            <section>
                <Portada></Portada>
                <article className="mt-5">
                    <Eventos></Eventos>
                </article>
                <article className="mt-4 pt-5" id="sobreNosotros">
                    <SobreNosotros></SobreNosotros>
                </article>
                {/* <article className="mt-5 py-5">
                    <PortadaDescripcion></PortadaDescripcion>
                </article> */}
                <article className="my-5 py-5">
                    <Servicios></Servicios>
                </article>
                <article className="myt-5">
                    <PortadaContacto></PortadaContacto>
                </article>
            </section>
        </main>
    );
};

export default Inicio;