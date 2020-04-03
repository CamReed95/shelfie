module.exports = {
    getInventory: (req, res, next) => {
        const db = req.app.get('db');
        db.get_inventory().then( inventory => {
            res.status(200).send(inventory)
        }).catch(err => console.log(err))
    },
    addInventory: (req, res, next) => {
        const db = req.app.get('db');
        db.add_inventory([req.body.name, req.body.email]).then(inventory => {
            res.status(200).send(inventory)
        }).catch(err => console.log(err))
    },
    updateInventory: (req, res, next) => {
        const db = req.app.get('db');
        db.update_inventory([req.body.email, req.params.id]).then(inventory => {
            res.status(200).send(inventory)
        }).catch(err => console.log(err))
    }

}