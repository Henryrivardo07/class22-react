// components/ui/Button.tsx
import React from 'react';
import styles from './Button.module.scss'; // Mengimpor SCSS Module

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'danger' | 'outlined';
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  type = 'button',
  variant = 'primary',
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.btn} ${styles[`btn-${variant}`]} ${disabled ? styles['btn-disabled'] : ''}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
