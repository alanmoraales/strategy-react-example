import { createContext } from "react";
import type { PseStrategy } from "@/payments/core/methods/pse/strategies/PseStrategy";

const PseStrategyContext = createContext<PseStrategy | null>(null);

export default PseStrategyContext;
