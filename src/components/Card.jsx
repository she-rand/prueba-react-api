const Card = ({titulo:titulo,url:url,descripcion:descripcion}) => {
    return(
        <>
            <div className="card" style={{width: '18rem'}}>
            <img src={url} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{titulo}</h5>
                <p className="card-text">{descripcion}</p>
                <a href="#" className="btn btn-primary">Detalles</a>
            </div>
        </div>
        </>
        
    );
    };
export default Card;