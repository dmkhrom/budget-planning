import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { AppWrapper } from 'app/styles';
import { Header, NavBar } from 'components';
import GlobalStyle from 'globalStyles';
import store from 'redux/store';
import { Router } from 'router';
import { theme } from 'theme';

export const App = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<GlobalStyle />
				<ThemeProvider theme={theme}>
					<AppWrapper>
						<Header />
						<NavBar />
						<Router />
					</AppWrapper>
				</ThemeProvider>
			</BrowserRouter>
		</Provider>
	);
};
