import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Sidebar from './components/Sidebar';
import Dashboard from './user/Dashboard';
import Trending from './user/Trending';
import Player from './user/Player';
import Favourites from './user/Favourites';
import Library from './user/Library';
import NavBar from './welcome/NavBar';

function App() {
    return (
        <div id='app'>

            <BrowserRouter>

                {/* <NavBar /> */}


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
