import { useState } from "react";
import styles from "./Modal.module.css";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.container}>
      <button onClick={() => setIsOpen(true)} className={styles.openButton}>Abrir Modal</button>

      {isOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>Este é um Modal</h2>
            <p>Exemplo de modal em React usando useState.</p>
            <button onClick={() => setIsOpen(false)} className={styles.closeButton}>Fechar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;