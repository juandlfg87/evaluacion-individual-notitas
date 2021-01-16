const path = require('path');
const db = require(path.join('..', 'db', 'models'));

module.exports = {
    detailGet: function (req, res, next) {
        db.notita.findByPk(req.params.id).then(
            resultados => {
                console.log(resultados.titulo)
                res.render('detail', { notita: resultados })
            }
        )
    },

    detailPut: function (req, res, next) {
        db.notita.update(
            {
                titulo: req.body.title,
                cuerpo: req.body.message
            },
            {
                where:
                {
                    id: req.params.id
                }
            }
        ).then(res.redirect('/'))
    }
}