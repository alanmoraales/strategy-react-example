import { useEffect, useState } from "react";
import usePseStrategyContext from "../context/usePseStrategyContext";
import type { IBankItem } from "@/payments/core/methods/pse/strategies/PseStrategy";

const useBanksList = () => {
  const pse = usePseStrategyContext();
  const [banksList, setBanksList] = useState<IBankItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchBanksList = async () => {
    setIsLoading(true);
    const banksList = await pse.getBankList();
    setBanksList(banksList);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchBanksList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pse]);

  return { banksList, isLoading };
};

export default useBanksList;
