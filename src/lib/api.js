import DB from "./database";

export const cargarDatos = (days, options) => {
    fetch(`https://top-nft-collections-and-sales.p.rapidapi.com/collections/${days}d`, options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
}

export const getVentas =  () => {
    const res = DB.exec('SELECT * FROM ventas');
    console.log(res)
}