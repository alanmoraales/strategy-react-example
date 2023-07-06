import { ReactNode } from "react";
import { PseStrategy } from "@/payments/core/methods/pse/strategies/PseStrategy";
import PseStrategyContext from "./PseStrategyContext";

interface PseStrategyProviderProps {
  strategy: PseStrategy;
  children: ReactNode;
}

const PseStrategyProvider = ({
  strategy,
  children,
}: PseStrategyProviderProps) => {
  return (
    <PseStrategyContext.Provider value={strategy}>
      {children}
    </PseStrategyContext.Provider>
  );
};

export default PseStrategyProvider;
