"use client";

import styles from "./ui.module.css";

interface CardProps {
  title?: string;
  children?: React.ReactNode;
}

export default function Card({ title = "Card", children }: CardProps) {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <div>{children}</div>
    </div>
  );
}
