import React from "react";
import styles from "./ui.module.css";

interface ChartProps {
  title: string;
}

export default function Chart({ title }: ChartProps) {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <div className={styles.chartArea}></div>
    </div>
  );
}
