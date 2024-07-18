import "../../assets/style/Inicio.css";
import Eventos from "../Ui/Eventos";
import Portada from "../Ui/Portada";
import PortadaDescripcion from "../Ui/PortadaDescripcion";
import SobreNosotros from "../Ui/SobreNosotros";
import Testimonios from "../Ui/Testimonios";
const Inicio = () => {
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
                <article className="my-5">
                    <Testimonios></Testimonios>
                </article>
                <article className="container">
                 <SobreNosotros></SobreNosotros>
                </article>
            </section>

        </main>
    );
};

export default Inicio;