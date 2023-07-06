interface IBankItem {
  id: string;
  name: string;
}

interface PseStrategy {
  getBankList(): Promise<IBankItem[]>;
}

type PseStrategyFactory = () => PseStrategy;

export type { IBankItem, PseStrategy, PseStrategyFactory };
