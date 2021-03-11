import './App.css';
import requests from './request';
import Row from './Row';
import Banner from './Banner';
import Nav from './Nav';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>

      <div>
        <Row title="NETFLIX ORIGINALS"  fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      /></div>
      <div className="original">
        <Row title="Trending Now"  fetchUrl={requests.fetchTrending}/>
      </div>
      <div className="original">
        <Row title="Top Rated"  fetchUrl={requests.fetchTopRated}/>
      </div>
      <div className="original">
        <Row title="Action Movies"  fetchUrl={requests.fetchActionMovies}/>
      </div>
      <div className="original">
        <Row title="Animation Movies"  fetchUrl={requests.fetchAnimationMovies}/>
      </div>
      <div className="original">
        <Row title="Comedy Movies"  fetchUrl={requests.fetchComedyMovies}/>
      </div>
      <div className="original">
        <Row title="Horror Movies"  fetchUrl={requests.fetchHorrorMovies}/>
      </div>
      <div className="original">
        <Row title="Romance Movies"  fetchUrl={requests.fetchRomanceMovies}/>
      </div>
      <div className="original">
        <Row title="Adventure Movies"  fetchUrl={requests.fetchAdventureMovies}/>
      </div>
      <div className="original">
        <Row title="Science Fiction Movies"  fetchUrl={requests.fetchScienceFicMovies}/>
      </div>
      <Footer/>
   
    </div>
  );
}

export default App;
