const path = require('path');
const db = require(path.join('..', 'db', 'models'));

module.exports = {
    indexGet: function (req, res, next) {
        db.notita.findAll().then(
            resultados => {
                res.render('index', { notitas: resultados })
            }
        )
    },

    indexPost: function (req, res, next) {
        //creo el objeto, parece que el css esta atado al name.
        db.notita.create(
            {
                titulo: req.body.title,
                cuerpo: req.body.cuerpo
            }
        )
            .then(res.redirect('/'))
    },

    indexDelete: function (req, res, next) {
        db.notita.destroy(
            {
                where: { id: req.params.id }
            }
        )
            .then(res.redirect('/'))
    }
}