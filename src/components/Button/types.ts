export interface IButton {
    title: string;
    variant?: 'primary' | 'secondary'; 
    onClick?: React.MouseEventHandler<HTMLButtonElement>; 
    type?: 'button' | 'submit' | 'reset';
  }
  