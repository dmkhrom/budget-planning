import { NAVIGATION } from 'constants';
import React from 'react';
import { Header } from 'components/Header/Header';
import { NavBar } from 'components/NavBar/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppWrapper } from 'app/styles';

export const App = () => {
	return (
		<BrowserRouter>
			<AppWrapper>
				<Header />
				<NavBar />
				<Routes>
					{
						NAVIGATION.map(({url, element}) => (
							<Route key={url} path={url} element={element} />
						))
					}
				</Routes>
			</AppWrapper>
		</BrowserRouter>
	);
};
