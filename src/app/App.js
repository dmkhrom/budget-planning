import React from 'react';
import { Navigate, Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { NavBar } from 'components/NavBar/NavBar';
import { FirstTab } from 'features/FirstTab/FirstTab';
import { SecondTab } from 'features/SecondTab/SecondTab';
import { AppWrapper } from './styles';

export const App = () => {
	return (
		<BrowserRouter>
			<AppWrapper>
				<Header/>
				<NavBar/>
				<Routes>
					<Route path="/" element={<Navigate replace to="/tab1" />}/>
					<Route path='/tab1' element={<FirstTab />}></Route>
					<Route path="/tab2" element={<SecondTab />}></Route>
				</Routes>
			</AppWrapper>
		</BrowserRouter>
	);
};
