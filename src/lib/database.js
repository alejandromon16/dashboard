import sqlite from 'better-sqlite3'
import dotenv from 'dotenv';
import uuid from 'uuid';
import { schemaVentas } from'./schemas';
import { cargarDatos } from './api';


dotenv.config();
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'top-nft-collections-and-sales.p.rapidapi.com',
		'X-RapidAPI-Key': 'c3f122004cmshdfe876ace808cc4p1a3924jsn82ff9b6b308f'
	}
};

const DB = new sqlite('./salesdb.sqlite')
DB.exec(schemaVentas);






export default DB;