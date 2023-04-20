require('../database/config/conect-mongo');

class ContainerMongo {
	constructor(model) {
		this.model = model;
	}
	getAll = () => {
		try {
			const result = this.model.find();
			return result;
		} catch (error) {
			console.log(error);
			throw new Error('error 400');
		}
	};

	getById = async (id) => {
		try {
			const result = await this.model.findById(id);
			return result;
		} catch (error) {
			console.log(error);
			throw new Error('error 400');
		}
	};

	create = async (body) => {
		try {
			const result = await this.model.create(body);
			return result;
		} catch (error) {
			console.log(error);
			throw new Error('error 400');
		}
	};

	update = async (id, body) => {
		try {
			const result = await this.model.findByIdAndUpdate(
				id,
				{ $set: body },
				{ $new: true }
			);
			return result;
		} catch (error) {
			console.log(error);
			throw new Error('error 400');
		}
	};

	deleteById = async (id) => {
		try {
			await this.model.findByIdAndDelete(id);
			return ' deleted succesfull';
		} catch (error) {
			console.log(error);
			throw new Error('error 400');
		}
	};
}

module.exports = ContainerMongo;
