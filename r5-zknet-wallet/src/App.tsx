import "./App.css";
import {
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
          </BoxSection>
          <Divider />
            <Link href="#">Need help with your ZKNet wallet?</Link>
        </FullContainerBox>
      </FullPageBox>
    </div>
  );
}

export default App;
