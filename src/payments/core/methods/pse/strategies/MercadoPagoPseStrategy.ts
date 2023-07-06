import type { PseStrategyFactory } from "./PseStrategy";

const MercadoPagoPseStrategy: PseStrategyFactory = () => {
  const getBankList = async () => {
    return [
      {
        id: "1",
        name: "Banco de Medellin",
      },
      {
        id: "2",
        name: "Banco de Cucuta",
      },
    ];
  };

  return {
    getBankList,
  };
};

const mercadoPagoPseStrategy = MercadoPagoPseStrategy();

export default mercadoPagoPseStrategy;
