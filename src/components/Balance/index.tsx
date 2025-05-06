import { BoxContent, BoxContentParent, Spacer, TextHeader } from "../../theme";
import R5Logo from "../../assets/r5-small.png";
import { useZkContext } from "../../contexts/ZkContext";

export function Balance() {
  const { zkBalance } = useZkContext()

  return (
    <BoxContentParent>
      <BoxContent>
        <img src={R5Logo} alt="logo" />
        <TextHeader style={{ margin: "0" }}>{zkBalance ?? ''}</TextHeader>
      </BoxContent>
      <Spacer />
      <BoxContent />
    </BoxContentParent>
  );
}
