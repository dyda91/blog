import { useEffect, useState } from 'react';
import Destaque from '../components/destaque/destaque';
import Posts from '../components/posts/posts';
import Categorias from '../components/categorias/categorias';
import axios from "axios"
import './home.css';


const url = "http://localhost:3000/api/post"

function Home() {
    const [postagem, setPostagem] = useState([]);
    const [destaque, setDestaque] = useState([]);

    useEffect (() => {
        const fetchPosts = async () =>{
           const res = await axios.get(url)
           setDestaque(res.data.reverse()[0])
           setPostagem(res.data)
        }
        fetchPosts()
    },[])
    return (
      <div>
        <h1>Destaque</h1>
        <Destaque destaque ={destaque} />
        <hr className="mt-5 mb-3"/>
        <Posts post={postagem}/>
        <hr className="mt-5 mb-3"/>
        <Categorias />
      </div>
    );
  }
  
  export default Home;