import * as app from '@server/app';

app.init()
	.then((server) => {
		const PORT = process.env.PORT || 2000;
		server.listen(PORT, () => {
			console.info(`🚀 app is running on port : ${PORT}`);
		});
	})
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
