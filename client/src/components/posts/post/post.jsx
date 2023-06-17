import './post.css'
const moment = require('moment');


function Posts({post}) {
    const formattedDate = moment(post.date).utc().format('DD/MM/YY')


  return (
        <div className='post'>
            <div className="imagemPost" style={{
             backgroundImage: `url(${post.image})`
    }}>
                <img src="" alt="" />
            </div>
            <div className="textoPost">
                <h3>{post.title}</h3>
                <div className="detalhes">
                    <span className='tempoPostagem'>{formattedDate}</span>
                    <span className='autor'>Admin</span>    
                </div>            

            </div>
        </div>
  );
}

export default Posts;