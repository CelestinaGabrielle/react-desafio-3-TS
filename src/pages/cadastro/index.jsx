// src/pages/Cadastro.jsx
import React from 'react';

const Cadastro = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulário de cadastro enviado!');
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Página de Cadastro</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          style={{ margin: '10px', padding: '10px', width: '200px' }}
        />
        <input
          type="email"
          placeholder="E-mail"
          style={{ margin: '10px', padding: '10px', width: '200px' }}
        />
        <input
          type="password"
          placeholder="Senha"
          style={{ margin: '10px', padding: '10px', width: '200px' }}
        />
        <button type="submit" style={{ padding: '10px 20px' }}>
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export { Cadastro }; // Exportação nomeada
