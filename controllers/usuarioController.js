const usuarioController = {

    conectarse : (req, res) => {
        res.send("Iniciar sesion");
    },

    registrarse : (req, res) => {
        res.send(" Registrar Usuario");
    }
}

module.exports = usuarioController;