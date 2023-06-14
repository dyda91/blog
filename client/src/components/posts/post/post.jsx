import './post.css'

function Posts() {
  return (
        <div className='post'>
            <div className="imagemPost">
                <img src="" alt="" />
            </div>
            <div className="textoPost">
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                <div className="detalhes">
                    <span className='tempoPostagem'>1 hora atraz</span>
                    <span className='autor'>Admin</span>    
                </div>            

            </div>
        </div>
  );
}

export default Posts;