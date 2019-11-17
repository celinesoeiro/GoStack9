import * as Yup from 'yup';
import Plan from '../models/Plan';

class PlanController {
  async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      duration: Yup.number()
        .integer()
        .required(),
      price: Yup.number().required(),
    });
    // Validação dos dados de entrada
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation failed.' });
    }
    // Validação do plano
    const planExists = await Plan.findOne({
      where: { title: req.body.title },
    });

    if (planExists) {
      return res.status(400).json({ error: 'Plan already exists.' });
    }
    // Passou todas as validações. Cria o novo plano
    const { title, duration, price } = await Plan.create(req.body);

    return res.json({ title, duration, price });
  }

  async index(req, res) {
    const plans = await Plan.findAll();
    return res.json(plans);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      duration: Yup.number().integer(),
      price: Yup.number(),
    });
    // Validação dos dados de entrada
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation failed.' });
    }
    // Validação do plano
    const planExists = await Plan.findOne({
      where: { title: req.body.title },
    });
    if (!planExists) {
      return res.status(400).json({ error: 'Plan does not exist.' });
    }
    // Passou todas as validações. Atualiza o plano
    const { title, duration, price } = await planExists.update(req.body);

    return res.json({ title, duration, price });
  }

  async delete(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
    });
    // Validação dos dados de entrada
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation failed.' });
    }
    // Validação do plano
    const planExists = await Plan.findOne({
      where: { title: req.body.title },
    });
    if (!planExists) {
      return res.status(400).json({ error: 'Plan does not exist.' });
    }
    // Passou todas as validações. Deleta o plano
    const { title, duration, price } = await planExists.destroy(req.body);
    return res.json({
      message: 'Plan deleted.',
      title,
      duration,
      price,
    });
  }
}

export default new PlanController();
