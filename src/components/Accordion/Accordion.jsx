import { useState } from "react";
import styles from "./Accordion.module.css";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const items = [
    { question: "O que é React?", answer: "React é uma biblioteca JavaScript para construir interfaces de usuário." },
    { question: "O que é um Hook?", answer: "Hooks são funções que permitem o uso do estado e de outras funcionalidades do React sem escrever uma classe." },
    { question: "O que é useState?", answer: "useState é um Hook que permite adicionar estado a componentes funcionais." },
  ];

  return (
    <div className={styles.accordion}>
      {items.map((item, index) => (
        <div key={index} className={styles.item}>
          <button onClick={() => toggleAccordion(index)} className={styles.button}>
            {item.question}
          </button>
          {activeIndex === index && <p className={styles.answer}>{item.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
