const path = require('path');
const db = require(path.join('..','db','models'));

module.exports = {
    index: function(req, res, next){
        //res.render('index', {notitas: [1,2,3]});
        db.notita.findAll().then(
            resultados => {
                res.render('index',{notitas: resultados})
                console.log(resultados)
            }
        )
    }
}