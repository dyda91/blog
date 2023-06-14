import './posts.css'
import Post from './post/post'

function Posts() {
  return (
    <div>
        <h2>Ultimas Noticias</h2>
        <div className="posts">        
            
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            
        </div>
    </div>
  );
}

export default Posts;