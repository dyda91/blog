import './destaque.css'
const moment = require('moment');

function Destaque({destaque}) {
  const formattedDateDestaque = moment(destaque.date).utc().format('DD/MM/YY')
  
  return (
    <div className='destaque'>
      <div className='imagemDestaque' style={{ 
      backgroundImage: `url(${destaque.image})`
    }}>
        
        <div>
            <h2>{destaque.title}</h2>
            <div className="detalhes">
              <span className='tempoPostagem'>{formattedDateDestaque}</span>
              <span className='autor'>Admin</span>
            </div>
        </div>
      </div>
      
      <div className="texto">

        <div className='textoPostagem'>
          <h4>{destaque.subtitle}</h4>
          <p>{destaque.text}</p>
        </div>

        

      </div>
  </div>
  );
}

export default Destaque;