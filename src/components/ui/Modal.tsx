"use client";

import { useState } from "react";
import styles from "./ui.module.css";

interface ModalProps {
  title?: string;
  header?: string;
  isOpen?: boolean;
  children?: React.ReactNode;
}

export default function Modal({ title, header, isOpen, children }: ModalProps) {
  // If isOpen is not provided → default to true
  const [open, setOpen] = useState(
    isOpen !== undefined ? isOpen : true
  );

  if (!open) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <h3>{title || header}</h3>

        <div style={{ marginBottom: "10px" }}>
          {children}
        </div>

        <button
          className={styles.button}
          onClick={() => setOpen(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
}
