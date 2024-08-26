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




const Inicio = () => {
    return (
        <main>
            <section>
                <Portada></Portada>
                <article className="mt-5">
                    <Eventos></Eventos>
                </article>
                <article className="mt-3 pt-4" id="sobreNosotros">
                    <SobreNosotros></SobreNosotros>
                </article>
                <article className="my-5 py-5">
                    <Servicios></Servicios>
                </article>
                <article className="mt-5">
                    <PortadaDescripcion></PortadaDescripcion>
                </article>
            </section>
        </main>
    );
};

export default Inicio;