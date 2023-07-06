"use client";

import {
  kushkiPseStrategy,
  mercadoPagoPseStrategy,
} from "@/payments/core/methods/pse/strategies";
import { PseStrategyProvider } from "@/payments/react/methods/pse/context";
import { useState } from "react";
import PseForm from "../PseForm";
import styles from "./PaymentForm.module.css";

const pseStrategies = {
  kushki: kushkiPseStrategy,
  mercadoPago: mercadoPagoPseStrategy,
};

type TPseEngine = keyof typeof pseStrategies;

const pseEngines: TPseEngine[] = Object.keys(pseStrategies) as TPseEngine[];

const PaymentForm = () => {
  const [pseEngine, setPseEngine] = useState<TPseEngine>("kushki");

  const onSelectPseEngine = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPseEngine(e.target.value as TPseEngine);
  };

  return (
    <div className={styles["payment-form__container"]}>
      <div>
        <h1>Selecciona tu motor de pago</h1>
        <select value={pseEngine} onChange={onSelectPseEngine}>
          {pseEngines.map((engine) => (
            <option key={engine} value={engine}>
              {engine}
            </option>
          ))}
        </select>
        <p>Engine: {pseEngine}</p>
      </div>
      <hr />
      <PseStrategyProvider strategy={pseStrategies[pseEngine]}>
        <PseForm />
      </PseStrategyProvider>
    </div>
  );
};

export default PaymentForm;
