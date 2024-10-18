import React from 'react'

import { Container, NameText, Progress, UserPicture} from './styles';
import { IUserInfoProps } from "./types";

const UserInfo: React.FC<IUserInfoProps> = ({nome,image, percentual}) => {
  return (
    <Container>
        <UserPicture src={image} />
        <div>
            <NameText>{nome}</NameText>
            <Progress percentual={percentual} />
        </div>
    </Container>
  )
}

export { UserInfo }