import React from 'react';
import { Header } from 'components/Header/Header';
import { NavBar } from 'components/NavBar/NavBar';
import { BrowserRouter } from 'react-router-dom';
import { AppWrapper } from 'app/styles';
import { Router } from 'router';

export const App = () => {
	return (
		<BrowserRouter>
			<AppWrapper>
				<Header />
				<NavBar />
				<Router />
			</AppWrapper>
		</BrowserRouter>
	);
};
