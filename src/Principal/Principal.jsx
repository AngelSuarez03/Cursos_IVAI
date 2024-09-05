import rlceImage from '../Imagenes/rlce.webp'; 
import ivaiImage from '../Imagenes/ivai.webp'
import './Principal.css';
import FacebookIcon from '../assets/facebook.svg';
import YoutubeIcon from '../assets/youtube.svg';
import TwitterIcon from '../assets/twitter-x.svg';
import InstagramIcon from '../assets/instagram.svg';
import MailIcon from '../assets/email.svg';
import WebIcon from '../assets/web.svg';
import CardInfo from '../Componentes/CardInfo';
import PopupMSJConfirmacion from '../Componentes/PopupMSJConfirmacion';

function Principal() {
    return(
    <>
        <section class="layout">
        <div class="header">
            <img src={rlceImage} alt="" className="header-img-right"/>
            <h1 className="header-title">
                    Cursos disponibles
            </h1>
            <img src={ivaiImage} alt="" className="header-img-left"/>
        </div>

        <div className='InfoCursos'>
            <CardInfo NombreCurso="Capacitación: “Archivos: Datos personales y Acceso a la informacion: un vínculo normativo” ---> 24/09/2024"FechaCurso="19/09/2024" LugarCurso="Virtual" ExpositorCurso="Dirección de Archivos" HoraCurso="11:00" TextoBoton="Ver Disponibilidad"/>
            <CardInfo NombreCurso="Capacitación: “Archivos: Datos personales y Acceso a la informacion: un vínculo normativo” ---> 24/09/2024"FechaCurso="19/09/2024" LugarCurso="Virtual" ExpositorCurso="Dirección de Archivos" HoraCurso="11:00" TextoBoton="Ver Disponibilidad"/>
            <CardInfo NombreCurso="Capacitación: “Archivos: Datos personales y Acceso a la informacion: un vínculo normativo” ---> 24/09/2024"FechaCurso="19/09/2024" LugarCurso="Virtual" ExpositorCurso="Dirección de Archivos" HoraCurso="11:00" TextoBoton="Ver Disponibilidad"/>
        </div>

        <div className="footer">
            
            <div className="social-group">
                <a href="https://www.facebook.com/ivaiveracruz" target="_blank" rel="noopener noreferrer">
                <img src={FacebookIcon} alt="Facebook" />
                </a>
                <a href="https://www.youtube.com/@IVAIVeracruz" target="_blank" rel="noopener noreferrer">
                <img src={YoutubeIcon} alt="YouTube" />
                </a>
                <p>ivaiveracruz</p>
            </div>

            
            <div className="social-group">
                <a href="https://x.com/VERIVAI" target="_blank" rel="noopener noreferrer">
                <img src={TwitterIcon} alt="Twitter" />
                </a>
                <a href="https://www.instagram.com/verivai" target="_blank" rel="noopener noreferrer">
                <img src={InstagramIcon} alt="Instagram" />
                </a>
                <p>verivai</p>
            </div>

            
            <div className="social-group">
                <a href="mailto:contacto@verivai.org.mx">
                <img src={MailIcon} alt="Correo" />
                </a>
                <p>contacto@verivai.org.mx</p>
            </div>

            
            <div className="social-group">
                <a href="https://ivai.org.mx" target="_blank" rel="noopener noreferrer">
                <img src={WebIcon} alt="Web" />
                </a>
                <p>ivai.org.mx</p>
            </div>
            </div>

        </section>
    </>
    );
}

export default Principal;