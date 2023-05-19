'use strict';


class Collection {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        try {
            const newEntry = await this.model.create(data);
            return newEntry
        }
        catch (error) {
            console.error('ERROR: model not created')
            return error;
        }
    }

    async read(id) {
        try {
            if (id) {
                const singleEntry = await this.model.findByPk(id)
                return singleEntry;
            }
            else {
                const entries = await this.model.findAll();
                return entries;
            }
        }
        catch (error) { console.error('ERROR: Collection not read') }
        return error;
    }

    async update(id) {

        try {
            const item = await this.model.findByPk(id);
            let updatedItem = item.update(req.body);
            return updatedItem;
        }
        catch (error) {
            console.error('could not find item to update')
        }


    }

    async delete(id) {
        try {
            const itemDelete = await this.model.findByPk(id);
            itemDelete.destroy();
            return 'Item Deleted';
        }
        catch (error) {
            console.error('ERROR: Could not delete');
        }
    }


}

module.exports = Collection;