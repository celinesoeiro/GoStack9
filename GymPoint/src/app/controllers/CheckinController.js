// import * as Yup from 'yup';
import Checkin from '../models/Checkin';
import Enrollment from '../models/Enrollment';
import Student from '../models/Student';

class CheckinController {
  async store(req, res) {
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
    // Validação de quantidade - Mais de 5 checkins em 7 dias?
    const quantCheckins = await Checkin.findAndCountAll({
      where: { student_id: req.params.id },
    });
    if (quantCheckins.count >= 5) {
      return res
        .status(400)
        .json({ error: 'You can only acess GymPoint 5 times in 7 days.' });
    }
    console.log(quantCheckins.count);
    // Passou as validação - Cria a sessão
    const student_id = req.params.id;
    const checkin = await Checkin.create({ student_id });
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

    const checkins = await Checkin.findAll({
      where: { student_id: req.params.id },
    });

    return res.json(checkins);
  }
}

export default new CheckinController();
