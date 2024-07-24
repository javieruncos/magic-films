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



const Inicio = () => {

    useEffect(() => {
        Aos.init({
            duration: 1000
        })
    },[])

    return (
        <main>
            <section>
                <Portada></Portada>
                <article className="mt-5">
                    <Eventos></Eventos>
                </article>
                <article className="mt-5">
                    <PortadaDescripcion></PortadaDescripcion>
                </article>
                <article className="my-5 pt-5">
                    <Caracteristicas></Caracteristicas>
                </article>
                <article className="my-5 pt-5">
                 <SobreNosotros></SobreNosotros>
                </article>
            </section>
         <WspBtn></WspBtn>
        </main>
    );
};

export default Inicio;