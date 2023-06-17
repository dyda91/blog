import './posts.css'
import Post from './post/post'

function Posts({post}) {

  
  console.log(post)
  return (
    <div>
        <h2>Ultimas Noticias</h2>
        <div className="posts">        
            {post.map((p, index) =>
              <Post post={p} key={index}/>
              )}
              
            
        </div>
    </div>
  );
}

export default Posts;