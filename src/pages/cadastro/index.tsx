import React from "react";
import { useNavigate } from "react-router-dom";
import { MdEmail, MdLock, MdPerson } from "react-icons/md";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { api } from "../../services/api";
import { useForm, SubmitHandler } from "react-hook-form";
import { IFormInputs } from "./types";  // Importe a interface

import {
  Container,
  Title,
  Column,
  TitleCadastro,
  SubtitleCadastro,
  LoginText,
  Infor,
  Row,
  Wrapper,
  TextPrivacy,
} from "./styles";

const Cadastro: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const {
    control,
    handleSubmit, // Continue utilizando handleSubmit normalmente
    formState: { errors },
  } = useForm<IFormInputs>({
    reValidateMode: "onChange",
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<IFormInputs> = async (formData) => {
    try {
      const { data } = await api.post("/login", {
        email: formData.email,
        senha: formData.senha,
      });

      if (data?.user?.id) {
        navigate("/feed");
        return;
      }

      alert("Usuário ou senha inválido");
    } catch (e) {
      console.error("Erro ao tentar logar:", e);
      alert("Houve um erro no login. Tente novamente.");
    }
  };

  return (
    <>
      <Header autenticado={false} />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleCadastro>Comece agora grátis</TitleCadastro>
            <SubtitleCadastro>
              Crie sua conta e make the change._
            </SubtitleCadastro>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                placeholder="Nome"
                leftIcon={<MdPerson />}
                name="name"
                control={control}
              />
              {errors.name && <span>Nome é obrigatório</span>}
              
              <Input
                placeholder="E-mail"
                leftIcon={<MdEmail />}
                name="email"
                control={control}
              />
              {errors.email && <span>E-mail é obrigatório</span>}

              <Input
                type="password"
                placeholder="Senha"
                leftIcon={<MdLock />}
                name="senha"
                control={control}
              />
              {errors.senha && <span>Senha é obrigatória</span>}

              <Button
                title="Criar minha conta"
                variant="secondary"
                type="submit"
              />
            </form>
            <TextPrivacy>
              Ao clicar em "criar minha conta grátis", declaro que aceito as
              Políticas de Privacidade e os Termos de Uso da DIO.
            </TextPrivacy>
            <Row>
              <Infor>Já possui uma conta?</Infor>
              <LoginText onClick={handleLogin}>Fazer login</LoginText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { Cadastro };
