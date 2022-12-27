const database = require("../models/index.js");

class PessoaController {
  static async obterTodasAsPessoas(req, res) {
    /* O método "findAll()" do Sequelize buscará todas as pessoas que estão na tabela "Pessoas", que é o arquivo retornado pelo model "pessoas.js". */

    try {
      const todasAsPessoas = await database.Pessoas.findAll();
      return res.status(200).json(todasAsPessoas);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async obterPessoaPorId(req, res) {
    try {
      const { id } = req.params;

      const pessoaBuscada = await database.Pessoas.findOne({
        where: { id: Number(id) },
      });

      return res.status(200).json(pessoaBuscada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async criarPessoa(req, res) {
    try {
      const novaPessoaBody = req.body;

      const novaPessoaCriada = await database.Pessoas.create(novaPessoaBody);

      return res.status(201).json(novaPessoaCriada);
    } catch (err) {
      return res.status(500).json(error.message);
    }
  }

  static async atualizarPessoa(req, res) {
    const novasInformacoes = req.body;
    const { id } = req.params;

    try {
      await database.Pessoas.update(novasInformacoes, {
        where: {
          id: Number(id),
        },
      });
      return res
        .status(201)
        .json({ message: "Registro atualizado com sucesso!" });
    } catch (err) {
      return res.status(500).json(error.message);
    }
  }

  static async deletarPessoa(req, res) {
    try {
      const { id } = req.params;
      await database.Pessoas.destroy({
        where: {
          id: Number(id),
        },
      });

      return res
        .status(204)
        .json({ message: "O registro foi deletado com sucesso!" });
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }
}

module.exports = PessoaController;
