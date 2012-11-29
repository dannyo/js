
/*
 * GET home page.
 */

exports.products = function(req, res){
  res.render('products.jade', { title: 'Products Page' });
};
