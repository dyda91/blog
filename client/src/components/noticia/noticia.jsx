import React, { useContext, useEffect, useState } from 'react';
import axios from "axios";
import { Context } from '../../context/context';
import { useLocation, useParams } from 'react-router-dom';
import './noticia.css'

function Noticia() {
const [noticia, setNoticia] = useState({})
const [title, setTitle] = useState({})
const [subtitle, setSubtitle] = useState({})
const [image, setImage] = useState({})
const [text, setText] = useState({})
const {id} = useParams()
const {user} = useContext(Context)

const url = "http://localhost:3000/api/post/"

useEffect(() => {

  const getPost = async () => {
    const res = await axios.get(url + id);
    setNoticia(res.data);
    setTitle(res.data.title);
    setSubtitle(res.data.subtitle);
    setImage(res.data.image);
    setText(res.data.text);
  };
  getPost();
  
}, [id]);

  return (
    <div className="news">
      <h1>{noticia.title}</h1>
      <h2>{noticia.subtitle}</h2>
      {noticia.image && (
          <img src={noticia.image} alt="" />
        )}
   
      <p>
       {noticia.text}
      </p>
    </div>
  );
}

export default Noticia;