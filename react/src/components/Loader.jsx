
export function Loader({text = "Cargando..."}){
    return(
        <div className="state-feedback">{text}</div>
    );
}