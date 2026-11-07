import { Link } from "react-router-dom";

export function NotFoundPage(){
    return(
        <section className="hero-section">
            <div className="hero-content">
                <span className="badge">Error 404</span>
                <h1 className="hero-title">Pagina no encontrada</h1>
                <p className="hero-subtitle">la pagina o seccion buscada no existe</p>
                <Link to="/" className="btn-primary">Volver a la tienda</Link>
            </div>
        </section>
    );
}