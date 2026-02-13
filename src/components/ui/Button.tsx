"use client";

import styles from "./ui.module.css";

interface ButtonProps {
  label?: string;
  onClick?: () => void;
}

export default function Button({ label = "Button", onClick }: ButtonProps) {
  return (
    <button
      className={styles.button}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
