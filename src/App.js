import {BrowserRouter} from 'react-router-dom'
import './App.css'
import ZeneRoutes from './ZeneRoutes';

function App() {
    return (
        <div id='app'>

            <BrowserRouter>

                    <ZeneRoutes/>

            </BrowserRouter>

        </div>
    );  
}

export default App;
