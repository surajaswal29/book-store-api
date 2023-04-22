const Product = require("../models/bookModel");
// const Category = require("../models/categoryModel");

// create product
exports.createProduct = async(req,res,next)=>{

    const product = await Product.create(req.body);

    res.status(201).json({
        success:true,
        product
    })
}

//Get Product
exports.getProductDetails = async(req,res,next)=>{
    const product = await Product.findById(req.params.id);

    if (!product) {
        return next("Product Not Found!");
    }

    res.status(200).json({
        success: true,
        product
    });
}

// Product Price filter
exports.filterProductPrice = async(req,res,next)=>{

    const product = await Product.find({unitPrice:{$lte: req.query.priceLessthan, $gte:req.query.priceGreaterThan}});

    if(!product){
        return next("Product not found!")
    }

    res.status(200).json({
        success:true,
        product
    })
}

// Get All Product
exports.getAllProduct = async(req,res,next)=>{
    const product = await Product.find().sort({unitPrice: 'desc'});

    if (!product) {
        return next("Product Not Found!");
    }
    
    res.status(200).json({
        success: true,
        product
    });
}

// Update product
exports.updateProduct = async (req, res, next) => {

// checking the availability of the product
  let product = await Product.findById(req.params.id);

  if (!product) {
    return next("Product Not Found");
  }

//if product exist then update
  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });

    res.status(200).json({
      success: true,
      message:"Product Updated Successfully",
      product
    });
};

// delete product
exports.deleteProduct = async (req, res, next) => {
  
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next("Product Not Found");
  }

  await product.deleteOne();

  res.status(200).json({
    success: true,
    message: "Product deleted!",
  });
 };