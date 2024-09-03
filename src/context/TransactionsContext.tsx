import { createContext, ReactNode, useEffect, useState } from "react";
import { ITransaction } from "../pages/Transactions";
import { api } from "../lib/axios";

interface TransactionsContextText {
  transactions: ITransaction[];
  fetchTransactions: (query?: string) => Promise<void>;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionsContextText);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);
  async function fetchTransactions(query?: string) {
    const response = await api.get("transactions", {
      params: {
        q: query,
      },
    });
    setTransactions(response.data);
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionsContext.Provider value={{ transactions, fetchTransactions }}>
      {children}
    </TransactionsContext.Provider>
  );
}
