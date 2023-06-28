import React from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet as StyledComponentSheets } from 'styled-components';
import { ServerStyleSheets as MuiServerStyleSheets } from '@mui/styles';


export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<meta charSet="UTF-8" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

MyDocument.getInitialProps = async (ctx) => {
	const styledComponentSheet = new StyledComponentSheets();
	const muiSheets = new MuiServerStyleSheets();
	const originalRenderPage = ctx.renderPage;

	try {
		ctx.renderPage = () =>
			originalRenderPage({
				enhanceApp: (App) => (props) =>
					styledComponentSheet.collectStyles(
						muiSheets.collect(<App {...props} />),
					),
			});

		const initialProps = await Document.getInitialProps(ctx);

		return {
			...initialProps,
			styles: [
				...React.Children.toArray(initialProps.styles),
				muiSheets.getStyleElement(),
				styledComponentSheet.getStyleElement(),
			],
		};
	} finally {
		styledComponentSheet.seal();
	}
};
