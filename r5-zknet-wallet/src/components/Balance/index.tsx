import { BoxContent, BoxContentParent, Spacer } from "../../theme";
import R5Logo from "../../assets/r5-small.png";

export function Balance() {
  return (
    <BoxContentParent>
      <BoxContent>
        <img src={R5Logo} alt="logo" />
        <h1 style={{ margin: '0' }}>0.0000</h1>
      </BoxContent>
      <Spacer />
      <BoxContent />
    </BoxContentParent>
  );
}
