import './destaque.css'

function Destaque() {
  return (
//   <Image src="holder.js/100px250" fluid />
    <div className='destaque'>
      <div className='imagemDestaque'>
        
        <div>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
            <div className="detalhes">
              <span className='tempoPostagem'>1 hora atraz</span>
              <span className='autor'>Admin</span>
            </div>
        </div>
      </div>
      
      <div className="texto">

        <div className='textoPostagem'>
          <p>Proin eleifend tempor ornare. Nam rhoncus mi massa, et aliquam lacus efficitur vel. Sed faucibus hendrerit ipsum in elementum. Aenean tempus condimentum turpis, a mattis sem.</p>
          <p>Proin eleifend tempor ornare. Nam rhoncus mi massa, et aliquam lacus efficitur vel. Sed faucibus hendrerit ipsum in elementum. Aenean tempus condimentum turpis, a mattis sem.</p>        
          <p>Proin eleifend tempor ornare. Nam rhoncus mi massa, et aliquam lacus efficitur vel. Sed faucibus hendrerit ipsum in elementum. Aenean tempus condimentu.</p>
        </div>

        

      </div>
  </div>
  );
}

export default Destaque;