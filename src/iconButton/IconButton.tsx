import React, { PropsWithChildren } from 'react';

import './IconButton.css';

type IconButtonProps =
   React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & PropsWithChildren;

const IconButton: React.FC<IconButtonProps> = ({
   children,
   className,
   ...other
}) => {
   const computedClassName = [
      'icon-button',
      className,
   ].join(' ').trimEnd();

   return (
      <button className={computedClassName} {...other}>
         {children}
      </button>
   )
}

export default IconButton;