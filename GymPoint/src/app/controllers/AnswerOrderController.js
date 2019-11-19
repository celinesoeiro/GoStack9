import * as Yup from 'yup';
import HelpOrder from '../models/HelpOrder';

class HelpOrderController {
  async store(req, res) {
    const schema = Yup.object().shape({
      answer: Yup.string().required(),
    });
    // Validação dos dados de entrada
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation failed.' });
    }
    // Validação da pergunta - A pergunta foi feita?
    const helpId = await HelpOrder.findByPk(req.params.id);
    if (!helpId) {
      return res.status(400).json({ error: 'The question does not exist.' });
    }
    // Pegando os dados do aluno
    const { student_id } = helpId;
    const { question } = helpId;
    // Passou as validação - Cria a sessão
    const answer_at = new Date();
    const { answer } = req.body;
    const answers = await HelpOrder.create({
      student_id,
      question,
      answer,
      answer_at,
    });
    return res.json({ answers });
  }

  async index(req, res) {
    const emptyOrders = await HelpOrder.findAll({
      where: { answer: null },
    });
    return res.json(emptyOrders);
  }
}

export default new HelpOrderController();
