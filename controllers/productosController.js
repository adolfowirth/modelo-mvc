const productosController = {

    comprar : (req, res) => {
        res.send("Comprar producto");
    },

    vender : (req, res) => {
        res.send("Vender producto");
    },

    detalle : (req, res) => {
        let productoId = req.params.num;
        res.send("El detalle del producto " + productoId);
    }

}

module.exports = productosController;