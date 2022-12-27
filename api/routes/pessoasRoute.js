const { Router } = require("express");

const PessoaController = require("../controllers/PessoaController.js");

const router = Router();

/* Quando essa rota for chamada, o método "obterTodasAsPessoas()" será executado. */
router.get("/pessoas", PessoaController.obterTodasAsPessoas);
router.get("/pessoa/:id", PessoaController.obterPessoaPorId);
router.post("/pessoa", PessoaController.criarPessoa);
router.put("/pessoa/:id", PessoaController.atualizarPessoa);
router.delete("/pessoa/:id", PessoaController.deletarPessoa);

module.exports = router;
