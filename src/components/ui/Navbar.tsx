import React from "react";
import styles from "./ui.module.css";

interface NavbarProps {
  title: string;
}

export default function Navbar({ title }: NavbarProps) {
  return (
    <div className={styles.navbar}>
      <h2>{title}</h2>
    </div>
  );
}
