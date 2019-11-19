import Mail from '../../lib/mail';

class RequestMail {
  get key() {
    return 'RequestMail';
  }

  async handle({ data }) {
    const { name, email, question, answer } = data;

    await Mail.sendMail({
      to: `${name} <${email}>`,
      subject: 'A resposta pra sua solicitação.',
      text: 'A resposta pra sua solicitação.',
      template: 'request',
      context: {
        student: name,
        order: question,
        answer,
      },
    });
  }
}

export default new RequestMail();
