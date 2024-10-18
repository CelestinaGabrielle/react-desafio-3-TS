import React from "react";
import { Control } from "react-hook-form";

export interface IInputProps{
    leftIcon?:React.ReactNode;
    name: string;
    control: Control<any>;
    rest?:React.InputHTMLAttributes<HTMLInputElement>;
    placeholder?: string;
    type?: string;
}