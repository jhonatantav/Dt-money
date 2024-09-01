import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";

import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento</td>
              <td>
                <PriceHighlight variant="income">R$12500,00</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>10/10/2000</td>
            </tr>
            <tr>
              <td width="50%">Dona Delicia</td>
              <td>
                <PriceHighlight variant="outcome">- R$60,00</PriceHighlight>
              </td>
              <td>Alimentação</td>
              <td>11/10/2000</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
