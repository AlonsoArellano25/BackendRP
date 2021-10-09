const Local = require("../models/local")

function addLocal(req, res){
	const local = new Local()

	const {name, quantity} = req.body
	local.name = name
	local.quantity = quantity

	if(!name || !quantity){
		res.status(404).send({message: "Todos los campos son obligatorios"})
	}else {
		local.save((err, storeStored)=> {
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

function getLocals(req, res){
	Local.find().then(locales => {
		if(!locales) {
			res.status(404).send({message: "No se ha encontrado ningun local"})
		}else {
			res.status(200).send({locales})
		}
	})
}

module.exports = {
	getLocals,
	addLocal
}