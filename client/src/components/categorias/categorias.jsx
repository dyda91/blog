import './categorias.css'

function Categorias() {

  return (
    <>
    <h2>Categorias</h2>

    <div className='categorias'>
    <div className='categoria'>
            <div className="imagemPost">
            </div>
            <div className="textoPost">
                <h3>Tecnologia</h3>    
            </div>
    </div>
    <div className='categoria'>
            <div className="imagemPost">
            </div>
            <div className="textoPost">
                <h3>Esportes</h3>    
            </div>
    </div>
    <div className='categoria'>
            <div className="imagemPost">
            </div>
            <div className="textoPost">
                <h3>Saúde</h3>    
            </div>
    </div>
    </div>
    </>
  );
}

export default Categorias;