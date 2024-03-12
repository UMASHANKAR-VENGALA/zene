import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Trending from './pages/Trending';
import Player from './pages/Player';
import Favourites from './pages/Favourites';
import Library from './pages/Library';

function App() {
    return (
        <div id='app'>

            <BrowserRouter>
                <Sidebar >
                  <Routes>

                    <Route path="/" element={<Dashboard/>} />
                    <Route path="/dashboard" element={<Dashboard/>} />
                    <Route path="/trending" element={<Trending/>} />
                    <Route path="/player" element={<Player/>} />
                    <Route path="/favourites" element={<Favourites/>} />
                    <Route path="/library" element={<Library/>} />

                  </Routes>
                </Sidebar>
            </BrowserRouter>

        </div>
    );  
}

export default App;
