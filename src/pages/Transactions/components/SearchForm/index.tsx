import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { TransactionsContext } from "../../../../context/TransactionsContext";
import { useContextSelector } from "use-context-selector";

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFromInputs = z.infer<typeof searchFormSchema>;

export function SearchForm() {
  const fetchTransactions = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.fetchTransactions;
    }
  );

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFromInputs>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearchTransactions(data: SearchFromInputs) {
    await fetchTransactions(data.query);
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Buscar por Transações"
        {...register("query")}
      />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={24} />
        Buscar
      </button>
    </SearchFormContainer>
  );
}
