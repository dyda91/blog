import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import NavScroll from './components/navbar/navbar';
import Destaque from './components/destaque/destaque';
import Posts from './components/posts/posts';

function App() {
  return (
    <div className='container'>
      <NavScroll />
      <h1>Destaque</h1>
      <Destaque />
      <Posts />
    </div>
  );
}

export default App;
