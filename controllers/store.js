const Store = require("../models/store")

function addStore(req, res){
	const store = new Store()

	const {name, location, local} = req.body
	store.name = name
	store.location = location
	store.local = local

	if(!name || !location){
		res.status(404).send({message: "Todos los campos son obligatorios"})
	}else {
		store.save((err, storeStored)=> {
			if(err) {
				res.status(500).send({message: "Error del servidor"})
			} else {
				if(!storeStored){
					res.status(404).send({message: "Error al crear el local"})
				} else {
					res.status(200).send({store: storeStored})
				}
			}
		})
	}
}

function getStores(req, res){
	Store.find().then(stores => {
		if(!stores) {
			res.status(404).send({message: "No se ha encontrado ningun local"})
		}else {
			res.status(200).send({stores})
		}
	})
}

module.exports = {
	getStores,
	addStore
}