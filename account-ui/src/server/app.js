import express from 'express';
import nextJs from 'next';
import routes from '@routes';

const IS_DEV = process.env.NODE_ENV !== 'production';

export const init = async () => {
	const app 		= nextJs({ dev: IS_DEV });
	const server 	= express();

	try {
		await Promise.all([app.prepare()]);

		routes(server, app);

		return server;
	} catch (error) {
		throw error;
	}
};
