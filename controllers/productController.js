const Product = require("../models/Product");

//create Product
const createProduct = async (req, res, next) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({
      success: true,
      product,
    });
  } catch (error) {
    next(error);
  }
};
// // getProducts
const getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.status(201).json({
      success: true,
      products,
    });
  } catch (error) {
    next(error);
  }
};

// get single Product
const getSingleProduct = async (req, res, next) => {
    try {
      const productId = req.params.id;
      const product = await Product.findById(productId);
      if (!product) {
        return res.send(ErrorHandler(500, "Product Not Found"));
     }
      res.status(201).json({
        success: true,
        product,
      });
    } catch (error) {
      next(error);
    }
  };


// updatePrice
const updateProduct = async (req, res, next) => {
    try {
        let product = await Product.findById(req.params.id);
        if (!product) {
            return res.send(ErrorHandler(500, "Product Not Found"));
        }
        product = await Product.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
                runValidators: true,
                useFindAndModify: false,
              });
      res.status(201).json({
        success: true,
        product,
      });
    } catch (error) {
      next(error);
    }
  };

module.exports = { createProduct, getAllProducts, getSingleProduct , updateProduct };
