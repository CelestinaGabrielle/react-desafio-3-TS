import React, { useState } from 'react';
import Card from '.';
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

const Cadastro = () => {
  // Estado para armazenar os valores dos campos
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: ''
  });

  // Função para lidar com a mudança nos campos
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados enviados:', formData);
    // Aqui você pode implementar a lógica para enviar os dados para uma API
  };

  return (
    <Card>
      <Header title="Cadastro de Usuário" />
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="nome"
          placeholder="Nome"
          value={formData.nome}
          onChange={handleChange}
        />
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <Input
          type="password"
          name="senha"
          placeholder="Senha"
          value={formData.senha}
          onChange={handleChange}
        />
        <Button type="submit">Cadastrar</Button>
      </form>
    </Card>
  );
};

export default Cadastro;
