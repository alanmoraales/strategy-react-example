import { useContext } from "react";
import PseStrategyContext from "./PseStrategyContext";

const usePseStrategyContext = () => {
  const context = useContext(PseStrategyContext);

  if (!context) {
    throw new Error(
      "usePseStrategyContext must be used within a PseStrategyProvider"
    );
  }

  return context;
};

export default usePseStrategyContext;
