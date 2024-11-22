import './App.css';
import { Box } from '@mui/material';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import Login from './pages/Login.jsx';
import { getAcessToken } from './utils/getAccessToken.js';
import { getAcessTokenFromStorage } from './utils/getAcessTokenFromStorage.js';
import { useEffect,useState } from 'react';
import {Routes, Route} from 'react-router-dom';

function App({spotifyApi}) {
	const [token, setToken] = useState(getAcessTokenFromStorage());
	return (
		<Box className="App" >
			{token ? (
				<Dashboard spotifyApi={spotifyApi}/>
			) : (
				<Routes>
					<Route path = "*" element = {<Login/>}/>
				</Routes>
			)}
		</Box>
	);
}

export default App;
