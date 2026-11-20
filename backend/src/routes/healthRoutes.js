const {Router} = require('express');
const {verificarBanco} = require('../controllers/healthController');

const router = Router();

router.get('/banco', verificarBanco);

module.exports = router;