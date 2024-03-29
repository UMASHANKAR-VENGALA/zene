import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
// import Sidebar from './user/UserSidebar';
// import AdminSidebar from './admin/AdminSidebar'
// import Dashboard from './user/Dashboard';
// import Trending from './user/Trending';
// import Player from './user/Player';
// import Favourites from './user/Favourites';
// import Library from './user/Library';
// import NavBar from './welcome/NavBar';
import ZeneRoutes from './ZeneRoutes';

function App() {
    return (
        <div id='app'>

            <BrowserRouter>

                {/* <NavBar /> */}


                <ZeneRoutes/>


                {/* <Sidebar >
                  <Routes>

                    <Route path="/dashboard" element={<Dashboard/>} />
                    <Route path="/trending" element={<Trending/>} />
                    <Route path="/player" element={<Player/>} />
                    <Route path="/favourites" element={<Favourites/>} />
                    <Route path="/library" element={<Library/>} />

                  </Routes>
                </Sidebar> */}
                {/* <AdminSidebar >
                  <Routes>

                    <Route path="/adminhome" element={<Dashboard/>} />
                    
                    <Route path="/trending" element={<Trending/>} />
                    <Route path="/player" element={<Player/>} />
                    <Route path="/favourites" element={<Favourites/>} />
                    <Route path="/library" element={<Library/>} />

                  </Routes>
                </AdminSidebar> */}
            </BrowserRouter>

        </div>
    );  
}

export default App;
