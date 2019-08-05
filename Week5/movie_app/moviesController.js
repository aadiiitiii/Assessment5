let Movie = require('./movieModel');

exports.create = function(req,res){
    let movie = new Movie();
    movie.name = req.body.name;
    movie._id = req.body._id;
    movie.actor= req.body.actor;
    movie.actress=req.body.actress;
    movie.save(function(err){
        res.json({
            status:'Successfully saved',
            data: movie
        })
    })
};

exports.listAll = function(req,res){
    Movie.find(function(err, movies){
        if(err){
            res.json(
                {
                    status:"error",
                    message: err
                }
            );
        }
        res.json({
            data: movies
        });
    })
    
};

exports.findById = function(req,res){
    Movie.findById(req.params._id, function(err, movie){
        if(err){
            res.json(
                {
                    status:"error",
                    message: err
                }
            );
        }
        res.json({
            data: movie
        });
    })
}

exports.delete = function (req, res) {
    Movie.remove({
        _id: req.params._id
    }, function (err, movie) {
        if (err)
            res.send(err);
res.json({
            status: "success",
            message: 'Movie deleted'
        });
    });
};

exports.update = function (req, res) {
    Movie.findById(req.params._id, function (err, movie) {
            if (err)
                res.send(err);
    movie.name = req.body.name ? req.body.name : movie.name;
            
            movie.save(function (err) {
                if (err)
                    res.json(err);
                res.json({
                    message: 'Contact Info updated',
                    data: movie
                });
            });
        });
    };