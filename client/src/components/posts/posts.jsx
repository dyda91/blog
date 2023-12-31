import './posts.css'
import Post from '../post/post'

function Posts({post}) {

  return (
    <div>
        <h2>Últimas Notícias</h2>
        <div className="posts">        
            {post.map((p, index) =>
              <Post post={p} key={index}/>
              )}
              
            
        </div>
    </div>
  );
}

export default Posts;