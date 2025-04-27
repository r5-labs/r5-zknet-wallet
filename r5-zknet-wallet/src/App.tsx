import "./App.css";
import {
  Box,
  BoxSection,
  Divider,
  FullContainerBox,
  FullPageBox,
  Link
} from "./theme";
import { Header } from "./components/Header";
import { ActionBar } from "./components/ActionBar";
import { Balance } from "./components/Balance";
import { TxHistory } from "./components/TxHistory";

function App() {
  return (
    <div className="App">
      <FullPageBox>
        <FullContainerBox>
        <Header />
        <Divider />
        <BoxSection>
        <Balance />
        <ActionBar />
        </BoxSection>
        <Divider />
        <BoxSection>
          <TxHistory />
          <Divider />
        <Link href="#">Need help with your ZKNet wallet?</Link>
        </BoxSection>
        </FullContainerBox>
      </FullPageBox>
    </div>
  );
}

export default App;
