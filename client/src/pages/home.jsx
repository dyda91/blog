import { useEffect, useState } from 'react';
import NavScroll from '../components/navbar/navbar';
import Destaque from '../components/destaque/destaque';
import Posts from '../components/posts/posts';
import Categorias from '../components/categorias/categorias';
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';
import Footer from '../components/footer/footer';

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
      <div className='container'>
        <NavScroll />
        <h1>Destaque</h1>
        <Destaque destaque ={destaque} />
        <hr class="mt-5 mb-3"/>
        <Posts post={postagem}/>
        <hr class="mt-5 mb-3"/>
        <Categorias />
        <Footer />
      </div>
    );
  }
  
  export default Home;