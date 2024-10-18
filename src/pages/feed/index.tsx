import React from 'react';
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';
import { Header } from '../../components/Header';
import { IUserInfo, IFeedProps } from './types';

import { Container, Column, Title, TitleHighlight } from './styles';

const userInfos: IUserInfo[] = [
  { nome: 'Pablo Henrique', image: 'https://avatars.githubusercontent.com/u/45184516?v=', percentual: 25 },
  { nome: 'Pablo Henrique', image: 'https://avatars.githubusercontent.com/u/45184516?v=', percentual: 65 },
  { nome: 'Pablo Henrique', image: 'https://avatars.githubusercontent.com/u/45184516?v=', percentual: 45 },
  { nome: 'Pablo Henrique', image: 'https://avatars.githubusercontent.com/u/45184516?v=', percentual: 72 },
];

const Feed: React.FC<IFeedProps> = ({ autenticado }) => {
  return (
    <>
      <Header autenticado={autenticado} />
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          {Array(10).fill(null).map((_, index) => (
            <Card key={index} />
          ))}
        </Column>
        <Column flex={1}>
          <TitleHighlight> # RANKING 5 TOP DA SEMANA </TitleHighlight>
          {userInfos.map((user, index) => (
            <UserInfo
              key={index}
              nome={user.nome}
              image={user.image}
              percentual={user.percentual}
            />
          ))}
        </Column>
      </Container>
    </>
  );
};

export { Feed };
