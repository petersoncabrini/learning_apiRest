const { default: axios } = require("axios");

const MainController = {
    index: (req, res) => {
        let cepConsulta = "";

        if ("cepConsulta" in req.query) {
            cepConsulta = req.query.cepConsulta;
        }

        if (cepConsulta.length === 8 || cepConsulta.length === 9) {
            axios.get(`https://brasilapi.com.br/api/cep/v2/${cepConsulta}`).then((resposta) => {
                res.render("index", {
                    detalhesCep: resposta.data,
                    cepConsulta: cepConsulta
                })
            }).catch((err) => {
                res.render("index", {
                    erro: err.response.data.message
                });
            })
        } else {
            res.render("index", {
                erro: "O cep deve ter entre 8 e 9 caracteres, e no formato 99999-999"
            });
        }



    }
}

module.exports = MainController