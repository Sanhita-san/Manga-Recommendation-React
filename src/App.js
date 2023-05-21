import './App.css';
import data from './Data';
import Manga from './Manga';

function App() {
  return (
    <>
      <header>
        <h1>Manga recommendation</h1>
        <h4>Here are few mangas/manhuas/manhwas I would like to recommend</h4>
      </header>

      <hr />

      <main>
        <div id='mangas'>
        {data.map((manga, index)=>
          <Manga 
            poster={manga.img} 
            title={manga.title} 
            genres={manga.genres} 
            descp={manga.descp} 
            key={index} 
          />
        )}
        </div> 
      </main>

      <hr />

      <footer>
        <p>Made with 💖 by Sanhita</p>
      </footer>
    </>
  );
}

export default App;
