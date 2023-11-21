import PageLoader from "./pages/PageLoader";
import Header from "./layout/header/Header";
import { FinanceProvider } from "./context/useFinance/useFinance";
function App() {
  return (
    <>
      <FinanceProvider>
        <Header />
        <PageLoader></PageLoader>
      </FinanceProvider>
    </>
  );
}

export default App;
