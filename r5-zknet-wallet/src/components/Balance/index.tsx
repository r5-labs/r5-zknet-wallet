import { BoxContent, BoxContentParent } from "../../theme";
import R5Logo from "../../assets/r5-small.png";

export function Balance() {
  return (
    <BoxContentParent>
      <BoxContent>
        <img src={R5Logo} alt="logo" />
        <h1>0.0000</h1>
      </BoxContent>
      <BoxContent />
    </BoxContentParent>
  );
}
