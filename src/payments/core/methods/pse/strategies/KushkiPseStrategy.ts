import type { PseStrategyFactory } from "./PseStrategy";

const KushkiPseStrategy: PseStrategyFactory = () => {
  const getBankList = async () => {
    return [
      {
        id: "1",
        name: "Banco de Bogotá",
      },
      {
        id: "2",
        name: "Banco de Occidente",
      },
    ];
  };

  return {
    getBankList,
  };
};

const kushkiPseStrategy = KushkiPseStrategy();

export default kushkiPseStrategy;
