const express = require("express");
const { createProduct, getProductDetails, getAllProduct, updateProduct, deleteProduct, filterProductPrice } = require("../controllers/bookController");

const router = express.Router();

// create product(Books)
router.route('/create').post(createProduct);

// get single product
router.route('/read/:id').get(getProductDetails);

// filter product
router.route('/filter').get(filterProductPrice);

// get All product
router.route('/readAll').get(getAllProduct);

// update product
router.route('/update/:id').put(updateProduct);

// Delete product 
router.route('/delete/:id').delete(deleteProduct);

module.exports = router;