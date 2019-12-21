import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

const Schema = Yup.object().shape({
  name: Yup.string().required('Esse campo é obrigatório'),
  email: Yup.string()
    .email('Insira um email válido.')
    .required('Esse campo é obrigatório'),
  password: Yup.string()
    .min(6, 'A senha deve ter no mínimo 6 caracteres')
    .required('Esse campo é obrigatório'),
});

export default function SingUp() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />
      <Form schema={Schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Digite seu e-mail" />
        <Input name="password" type="password" placeholder="Digite sua senha" />
        <button type="submit">Criar conta</button>
        <Link to="/">Já sou cadastrado</Link>
      </Form>
    </>
  );
}
