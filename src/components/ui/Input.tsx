"use client";

import styles from "./ui.module.css";

interface InputProps {
  placeholder?: string;
  type?: string;
}

export default function Input({
  placeholder = "Enter text",
  type = "text",
}: InputProps) {
  return (
    <input
      className={styles.input}
      placeholder={placeholder}
      type={type}
    />
  );
}
