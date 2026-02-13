import React from "react";
import styles from "./ui.module.css";

interface SidebarProps {
  items: string[];
}

export default function Sidebar({ items }: SidebarProps) {
  return (
    <div className={styles.sidebar}>
      {items.map((item, index) => (
        <div key={index} className={styles.sidebarItem}>
          {item}
        </div>
      ))}
    </div>
  );
}
