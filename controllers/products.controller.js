class ProductController {

    all(req, res){
        return res.render('products')
    }

    single(req, res){
        return res.render('')
    }
}

module.exports = new ProductController()