import * as Yup from 'yup';
import HelpOrder from '../models/HelpOrder';
import Enrollment from '../models/Enrollment';
import Student from '../models/Student';

class HelpOrderController {
  async store(req, res) {
    const schema = Yup.object().shape({
      question: Yup.string().required(),
    });
    // Validação dos dados de entrada
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation failed.' });
    }
    // Validação de usuário - O usuário já está cadastrado?
    const studentExists = await Student.findByPk(req.params.id);
    if (!studentExists) {
      return res.status(400).json({ error: 'Student not found.' });
    }
    // Validação de matrícula - O usuário está matriculado?
    const enrollmentExists = await Enrollment.findOne({
      where: { student_id: req.params.id },
    });
    if (!enrollmentExists) {
      return res.status(400).json({ error: 'Enrollment not found.' });
    }
    // Passou as validação - Cria a sessão
    const student_id = req.params.id;
    const { question } = req.body;
    const checkin = await HelpOrder.create({ student_id, question });
    return res.json({ checkin });
  }

  async index(req, res) {
    // Validação de usuário - O usuário já está cadastrado?
    const studentExists = await Student.findByPk(req.params.id);
    if (!studentExists) {
      return res.status(400).json({ error: 'Student not found.' });
    }
    // Validação de matrícula - O usuário está matriculado?
    const enrollmentExists = await Enrollment.findOne({
      where: { student_id: req.params.id },
    });
    if (!enrollmentExists) {
      return res.status(400).json({ error: 'Enrollment not found.' });
    }
    const helporders = await HelpOrder.findAll({
      where: { student_id: req.params.id },
    });
    return res.json(helporders);
  }
}

export default new HelpOrderController();
