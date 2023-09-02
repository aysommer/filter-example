import React, { PropsWithChildren } from 'react';

import './Button.css';

type ButtonProps =
   React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & PropsWithChildren;

const Button: React.FC<ButtonProps> = ({
   children,
   ...other
}) => {
   return (
      <button className='button' {...other}>
         {children}
      </button>
   )
}

export default Button