import React from 'react'
import { Controller } from "react-hook-form";

import {InputContainer, InputText, IconContainer } from './styles';
import { IInputProps } from "./types";


const Input: React.FC<IInputProps> = ({leftIcon, name, control, placeholder, type, ...rest}) => {


  return (
    <InputContainer>
        {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
        <Controller
        name={name}
        control={control}
        render={({ field }) =>  <InputText {...field} {...rest} />}
      />
       
    </InputContainer>
  )
}

export { Input }; 
