import React from 'react';
import { Header } from 'components/Header/Header';
import { NavBar } from 'components/NavBar/NavBar';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { AppWrapper } from 'app/styles';
import GlobalStyle from 'globalStyles';
import store from 'redux/store';
import { Router } from 'router';

export const App = () => {
	return (

		<Provider store={store}>
			<BrowserRouter>
				<GlobalStyle />
				<AppWrapper>
					<Header />
					<NavBar />
					<Router />
				</AppWrapper>
			</BrowserRouter>
		</Provider>
	);
};
