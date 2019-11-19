import { format } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import Mail from '../../lib/mail';

class RegistrationMail {
  get key() {
    return 'RegistrationMail';
  }

  async handle({ data }) {
    const { studentExists, planExists, price, end_date } = data;

    await Mail.sendMail({
      to: `${studentExists.name} <${studentExists.email}>`,
      subject: 'Bem vindo!',
      text: 'Você acabou de se matricular!',
      template: 'registration',
      context: {
        student: studentExists.name,
        plan: planExists.title,
        date: format(new Date(end_date), "dd 'de' MMMM 'de' yyyy", {
          locale: pt,
        }),
        price,
      },
    });
  }
}

export default new RegistrationMail();
