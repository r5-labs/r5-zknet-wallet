import { BoxContent, BoxContentParent, Spacer, TextHeader } from "../../theme";
import R5Logo from "../../assets/r5-small.png";

export function Balance() {
  return (
    <BoxContentParent>
      <BoxContent>
        <img src={R5Logo} alt="logo" />
        <TextHeader style={{ margin: '0' }}>0.0000</TextHeader>
      </BoxContent>
      <Spacer />
      <BoxContent />
    </BoxContentParent>
  );
}
