import './post.css'
import { Link } from 'react-router-dom';


const moment = require('moment');


function Posts({post}) {
    const formattedDate = moment(post.date).utc().format('DD/MM/YY')


  return (
        <div className='post'>
            <div className="imagemPost" style={{
             backgroundImage: `url(${post.image})`
    }}>
            
            </div>
            <div className="textoPost">
                <Link to={`/noticia/${post._id}`}><h3>{post.title}</h3></Link>
                <div className="detalhes">
                    <span className='tempoPostagem'>{formattedDate}</span>
                    <span className='autor'>Admin</span>    
                </div>            

            </div>
        </div>
  );
}

export default Posts;