import * as Yup from 'yup';
import HelpOrder from '../models/HelpOrder';
import Queue from '../../lib/queue';
import RequestMail from '../jobs/RequestMail';
import Student from '../models/Student';

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
    const { name, email } = await Student.findByPk(student_id);
    // Passou as validação - Cria a sessão
    const answer_at = new Date();
    const { answer } = req.body;
    const answers = await HelpOrder.create({
      student_id,
      question,
      answer,
      answer_at,
    });
    // Respondeu? Envia a resposta por email
    await Queue.add(RequestMail.key, {
      name,
      email,
      question,
      answer,
    });
    // Criou a resposta da pergunta? Deleta a pergunta.
    helpId.destroy();
    return res.json({ answers });
  }

  async index(req, res) {
    const emptyAnswer = await HelpOrder.findAll({
      where: { answer: null },
    });

    return res.json(emptyAnswer);
  }
}

export default new HelpOrderController();
