import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import './postagem.css'

const Postagem = () => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [category, setCategory] = useState('');
  const [imageLink, setImageLink] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate()


  const handleSubmit = async (e) => {
    e.preventDefault();
    
        try {
          const response = await axios.post('http://localhost:3000/api/post', {
            title: title,
            subtitle: subtitle,
            category: category,
            image: imageLink,
            text: content
          });
    
          console.log('Post enviado com sucesso!');
          navigate(`/`);

        } catch (error) {
          console.error('Ocorreu um erro:', error);
        }
      };

  return (
    <div className="container">
	<div className="row">
			<form onSubmit={handleSubmit} className="contact-form">
				<div className="form-group">
				  <label className="control-label col-sm-2">Titulo:</label>
				  <div className="col-sm-10">          
					<input type="text" className="form-control" value={title}  onChange={(e) => setTitle(e.target.value)} placeholder="Digite o Titulo da matéria" name="title" />
				  </div>
				</div>
				<div className="form-group">
				  <label className="control-label col-sm-2">Subtitulo:</label>
				  <div className="col-sm-10">          
					<input type="text" className="form-control"  value={subtitle}  onChange={(e) => setSubtitle(e.target.value)} placeholder="Digite o subtitulo da matéria" name="subtitle" />
				  </div>
				</div>
                <div className="form-group">
				  <label className="control-label col-sm-2">Imagem:</label>
				  <div className="col-sm-10">
					<input type="text" className="form-control" value={imageLink} onChange={(e) => setImageLink(e.target.value)} placeholder="Link da imagem" name="image" />
				  </div>
				</div>
                <div className="form-group">
                    <label className="control-label col-sm-2">Categoria:</label>
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        name='category'
                    >
                        <option value="">Selecione uma categoria</option>
                        <option value="politics">Política</option>
                        <option value="sports">Esportes</option>
                        <option value="technology">Tecnologia</option>
                    </select>
                </div>
				<div className="form-group">
				  <label className="control-label col-sm-2">Conteúdo:</label>
				  <div className="col-sm-10">
					<textarea className="form-control" value={content} onChange={(e) => setContent(e.target.value)} rows="12" id="comment"></textarea>
				  </div>
				</div>
				<div className="form-group">        
				  <div className="col-sm-offset-2 col-sm-10">
					<button type="submit" className="btn btn-default">Postar</button>
				  </div>
				</div>
			</form>
		</div>
	</div>
  );
};

export default Postagem;