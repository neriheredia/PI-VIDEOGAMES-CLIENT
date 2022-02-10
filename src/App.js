import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './app.scss';
import PageError from './pages/404Page/PageError';
import CreateGame from './pages/createGame/CreateGame';
import DetailGame from './pages/detailGame/DetailGame';
// import FavoriteGames from './pages/favoriteGames/FavoriteGames';
import Home from './pages/home/Home';
import LandingPage from './pages/landingPage/LandingPage';

function App() {
    return (
        <BrowserRouter>
            <div className='home'>
                <Routes>
                    <Route path='/' element={<LandingPage />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/newGame' element={<CreateGame />} />
                    <Route path='/videogame/:id' element={<DetailGame />} />
                    <Route path='/videogame/*' element={<PageError />} />
                    {/* <Route path='/favoriteGame' element={<FavoriteGames />} /> */}
                    <Route path='*' element={<PageError />} />
                </Routes>
            </div>
        </BrowserRouter>

    );
}

export default App;
