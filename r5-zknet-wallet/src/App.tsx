import "./App.css";
import {
  Box,
  BoxSection,
  Divider,
  Link
} from "./theme";
import { Header } from "./components/Header";
import { ActionBar } from "./components/ActionBar";
import { Balance } from "./components/Balance";

function App() {
  return (
    <div className="App">
      <Box>
        <Header />
        <Divider />
        <BoxSection>
        <Balance />
        <ActionBar />
        </BoxSection>
        <Divider />
        <BoxSection>
        <Link href="#">Need help with your ZKNet wallet?</Link>
        </BoxSection>
      </Box>
    </div>
  );
}

export default App;
