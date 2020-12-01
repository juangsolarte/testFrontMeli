const { Router } = require('express');
const ProductController = require('../controller/productController');
const router = Router();

router.get('/', (req, res) => {
    res.send('Hello World');
});

router.get('/items', (req, res) => {
    const search = req.query.search;
    if (!!search) {
        ProductController.getProducts(search, res);
    } else {
        res.status(400).send({
            error: 'Escribe una palabra para iniciar la busqueda : \'search\' '
        });
    }
});

router.get('/items/:id', (req, res) => {
    const productId = req.params.id;
    if (!!productId) {
        try {
            ProductController.getProductDetails(productId, res);
        } catch (error) {
            // your catch block code goes here
            console.log('tiene error ', error);
        }
    } else {
        res.status(400).send({ error: 'Falta el id del producto' });
    }

});

module.exports = router;