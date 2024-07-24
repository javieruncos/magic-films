import "../../assets/style/Inicio.css";
import Caracteristicas from "../Ui/Caracteristicas";
import Eventos from "../Ui/Eventos";
import Portada from "../Ui/Portada";
import PortadaDescripcion from "../Ui/PortadaDescripcion";
import SobreNosotros from "../Ui/SobreNosotros";
import WspBtn from "../Ui/WspBtn";


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