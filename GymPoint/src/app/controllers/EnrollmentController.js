import * as Yup from 'yup';
import { startOfHour, parseISO, isBefore, addDays, isAfter } from 'date-fns';
import Plan from '../models/Plan';
import Student from '../models/Student';
import Enrollment from '../models/Enrollment';

class EnrollmentController {
  async store(req, res) {
    const schema = Yup.object().shape({
      student_id: Yup.number()
        .integer()
        .required(),
      plan_id: Yup.number()
        .integer()
        .required(),
      start_date: Yup.date().required(),
    });
    // Validação dos dados de entrada
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation failed.' });
    }
    // Validação do plano - O plano existe?
    const planExists = await Plan.findOne({
      where: { id: req.body.plan_id },
    });
    if (!planExists) {
      return res.status(400).json({ error: 'Plan does not exist.' });
    }
    // Validação de usuário - O usuário já está cadastrado?
    const studentExists = await Student.findOne({
      where: { id: req.body.student_id },
    });
    if (!studentExists) {
      return res.status(400).json({ error: 'Student not found.' });
    }
    // Validação da data
    const hourStart = startOfHour(parseISO(req.body.start_date));
    if (isBefore(hourStart, new Date())) {
      return res.status(400).json({
        error: 'Are you a time traveller?! Past dates are not permitted.',
      });
    }
    // Passou todas as validações? Cria o novo cadastro
    const pricePlan = planExists.price;

    const { student_id, plan_id, start_date } = req.body;

    let days = 0;
    switch (planExists.duration) {
      case 1:
        days = 30;
        break;
      case 2:
        days = 60;
        break;
      case 3:
        days = 90;
        break;
      case 4:
        days = 120;
        break;
      case 5:
        days = 150;
        break;
      case 6:
        days = 180;
        break;
      case 7:
        days = 210;
        break;
      case 8:
        days = 240;
        break;
      case 9:
        days = 270;
        break;
      case 10:
        days = 300;
        break;
      case 11:
        days = 330;
        break;
      case 12:
        days = 360;
        break;
      default:
        days = 30;
    }

    const end_date = addDays(new Date(start_date), days);
    const price = pricePlan * planExists.duration;

    Enrollment.create({ student_id, plan_id, start_date, end_date, price });

    return res.json({ student_id, plan_id, start_date, end_date, price });
  }

  async index(req, res) {
    const enrollments = await Enrollment.findAll();
    return res.json(enrollments);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      student_id: Yup.number()
        .integer()
        .required(),
      plan_id: Yup.number()
        .integer()
        .required(),
      newPlan_id: Yup.number()
        .integer()
        .required(),
      start_date: Yup.date().required(),
    });
    // Validação dos dados de entrada
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation failed.' });
    }
    // Validação do plano - O plano existe?
    const planExists = await Plan.findOne({
      where: { id: req.body.newPlan_id },
    });
    if (!planExists) {
      return res.status(400).json({ error: 'Plan does not exist.' });
    }
    // Validação de usuário - O usuário já está cadastrado?
    const studentExists = await Student.findOne({
      where: { id: req.body.student_id },
    });
    if (!studentExists) {
      return res.status(400).json({ error: 'Student not found.' });
    }
    // Validação da data - A data está por vir ainda?
    const hourStart = startOfHour(parseISO(req.body.start_date));
    if (isBefore(hourStart, new Date())) {
      return res.status(400).json({
        error: 'Are you a time traveller?! Past dates are not permitted.',
      });
    }
    // Encontrar a matrícula
    const enroll = await Enrollment.findOne({
      where: {
        student_id: req.body.student_id,
        plan_id: req.body.plan_id,
      },
    });
    // Validação da data - A data escolhida é após a data final do plano atual?
    const validDate = isAfter(req.body.start_date, enroll.end_date);
    if (!validDate) {
      return res.status(400).json({
        error: 'You cannot change plans before your actual plan is over.',
        message: enroll.end_date,
      });
    }
    // Passou todas as validações? Atualiza o cadastro
    const pricePlan = planExists.price;

    const { student_id, newPlan_id, start_date } = req.body;

    let days = 0;
    switch (planExists.duration) {
      case 1:
        days = 30;
        break;
      case 2:
        days = 60;
        break;
      case 3:
        days = 90;
        break;
      case 4:
        days = 120;
        break;
      case 5:
        days = 150;
        break;
      case 6:
        days = 180;
        break;
      case 7:
        days = 210;
        break;
      case 8:
        days = 240;
        break;
      case 9:
        days = 270;
        break;
      case 10:
        days = 300;
        break;
      case 11:
        days = 330;
        break;
      case 12:
        days = 360;
        break;
      default:
        days = 30;
    }

    const end_date = addDays(new Date(start_date), days);
    const price = pricePlan * planExists.duration;
    const plan_id = newPlan_id;

    enroll.update({ student_id, plan_id, start_date, end_date, price });

    return res.json({ student_id, plan_id, start_date, end_date, price });
  }

  async delete(req, res) {
    const schema = Yup.object().shape({
      student_id: Yup.number()
        .integer()
        .required(),
      plan_id: Yup.number()
        .integer()
        .required(),
    });
    // Validação dos dados de entrada
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation failed.' });
    }
    // Encontrar a matrícula
    const enroll = await Enrollment.findOne({
      where: {
        student_id: req.body.student_id,
        plan_id: req.body.plan_id,
      },
    });
    // Validação do plano - O plano existe?
    const planExists = await Plan.findOne({
      where: { id: req.body.plan_id },
    });
    if (!planExists) {
      return res.status(400).json({ error: 'Plan does not exist.' });
    }
    // Validação de usuário - O usuário já está cadastrado?
    const studentExists = await Student.findOne({
      where: { id: req.body.student_id },
    });
    if (!studentExists) {
      return res.status(400).json({ error: 'Student not found.' });
    }
    // Validação da data
    const hourStart = startOfHour(parseISO(req.body.start_date));
    if (isBefore(hourStart, new Date())) {
      return res.status(400).json({
        error: 'Are you a time traveller?! Past dates are not permitted.',
      });
    }
    const { student_id, plan_id } = req.body;
    const { start_date, end_date, price } = enroll;

    const attributes = { student_id, plan_id, start_date, end_date, price };

    enroll.destroy(attributes);

    return res.json({ message: 'Enrollment deleted.' });
  }
}

export default new EnrollmentController();
