import { useEffect } from 'react';
import { appWithTranslation } from 'next-i18next';
import { ThemeProvider as ThemeProviderMui } from '@mui/material/styles';
import { createGlobalStyle, ThemeProvider as ThemeProviderSC } from 'styled-components';

import { wrapper } from '~store';
import muiTheme from '~configs/theme/mui';
import styledComponentsTheme from '~configs/theme/styleComponent';

const GlobalStyle = createGlobalStyle`
body{
	padding:0;
	margin:0;
}`;

const MyApp = ({ Component, pageProps }) => {
	useEffect(() => {
		const jssStyles = document.querySelector('#jss-server-side');
		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles);
		}
	}, []);

	return (
		<ThemeProviderMui theme={muiTheme}>
			<ThemeProviderSC theme={styledComponentsTheme}>
				<GlobalStyle />
				<Component {...pageProps} />
			</ThemeProviderSC>
		</ThemeProviderMui>
	);
};

export default wrapper.withRedux(appWithTranslation(MyApp));
