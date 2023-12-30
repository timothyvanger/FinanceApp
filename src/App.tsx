import PageLoader from "./pages/PageLoader";
import Header from "./layout/header/Header";
import { FinanceProvider } from "./context/useFinance/useFinance";
import { AccountProvider } from "./context/useAccount/useAccount";
import { ProfileProvider } from "./hooks/useProfile/useProfile";
function App() {
  return (
    <>
      <ProfileProvider>
        <AccountProvider>
          <FinanceProvider>
            <Header />
            <PageLoader></PageLoader>
          </FinanceProvider>
        </AccountProvider>
      </ProfileProvider>
    </>
  );
}

export default App;
