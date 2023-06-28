import express from 'express';
import cors from 'cors';
import path from 'path';
import favicon from 'serve-favicon';

export default async (server, nextApp) => {
	const handle = nextApp.getRequestHandler();

	server.use(cors());

	server.use(favicon(path.join(__dirname, '../../../public/static/images/favicon.ico')));
	server.get('(/_next/*|/static/*)', (req, res) => handle(req, res));

	server.use(express.json());
	server.use(express.urlencoded({ extended: true }));

	server.get('*', (req, res) => handle(req, res));
};
