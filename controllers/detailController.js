const path = require('path');
const db = require(path.join('..','db','models'));

module.exports = {
    detailGet: function(req, res, next){
        db.notita.findByPk(req.params.id).then(
            resultados => {
                res.render('detail',{notita: resultados})
            }
        )
        
    }
}