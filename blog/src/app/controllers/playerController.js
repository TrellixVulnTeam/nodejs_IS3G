const Author = require('../models/Author');
const mongoClient = require('mongodb').MongoClient;
const { mongooseToObject } = require('../../util/mongoose')
class playerController {
    // [GET] /players/show
    show(req, res, next) {
        Author.findOne({ slug: req.params.slug })
            .then((authors) => {
                authors =
                    res.render('players/show', { authors: mongooseToObject(authors) });
            })
            .catch(next);
    }
    //[GET] /players/create
    create(req, res, next) {
        res.render('players/create');
    }
    //[POST] /players/store

    store(req, res, next) {
        //res.json(req.body);
        const formData = req.body;
        const author = new Author(formData);
        author.save()
            .then(() => res.redirect('/search'))
            .catch(error => {

            });
    }
    // [GET] /players/:id/edit
    edit(req, res, next) {
        Author.findById(req.params.id)
            .then((author) => {
                res.render('players/edit', { author: mongooseToObject(author) });
            })
            .catch(next);
    }

    // [PUT] /players/:id
    update(req, res, next) {
        Author.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/players'))
            .catch(next);
    }
    delete(req, res, next) {
        Author.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // [DELETE] /players/:id/force
    forceDelete(req, res, next) {
        Author.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
    // [PATCH] /players/:id/restore

    restore(req, res, next) {
        Author.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
    //[POST] /players/handleFormAction
    handleFormAction(req, res, next) {
        switch (req.body.action) {
            case 'delete':
                Author.delete({ _id: { $in : req.body.playerIds } })
                    .then(() => res.redirect('back'))
                    .catch(next);
                break;
            default:
                res.json({ mess: 'action invailid !!!' });
        }
    }
}
module.exports = new playerController();
