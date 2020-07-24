module.exports = (app) => {
    const animalsController = require('../controllers/animals.js');
    app.use('/animals', animalsController)
}