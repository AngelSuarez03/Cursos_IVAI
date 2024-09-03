// import {Button, TextField, Box} from "@mui/material";
import './Principal.css'

function Principal() {
    return(
    <>
    <div className="container">
        <div className="Login_container">
        <img src="src/assets/Imagenes/Legendary.WEBP" alt="" className="img_Legendary"/>
             <h1 className="title">Inicio de Sesión</h1>
            <form action="" onSubmit={procesarFormulario}>
                <input type="text" className="textFieldDatos" placeholder="Usuario" onChange={cambiosFormulario} name='correo'/>
                <input type="password" className="textFieldDatos" placeholder="Contraseña" onChange={cambiosFormulario} name='contrasena'/>
                <input type="submit" value="Iniciar Sesión" className="botonSesion" disabled={cargando}/>
             </form>
             <Link to="/SignUp" className="link_SingUp">Registrarme</Link>
            {/* <a href="./SingUp.html" className="link_SingUp">Registrarme</a> */}
        </div>

        <div className="image_login_container">
        </div>

    </div>
    
    </>
    );
}
export default Principal;